import React, { useContext, useReducer } from "react";
import jwt_decode from 'jwt-decode';
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
    LOADING,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_FAIL,
    LOGOUT_FAIL,
} from "./types";
import { apiPost } from "../utils/apiHelper";
const AuthState = ({ children }) => {
    const initialState = {
        token: localStorage?.getItem('accessToken'),
        isAuthenticated: localStorage?.getItem('accessToken') 
        ? true : 
        false,
        loading: false,
        user: null,
        error: null,
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);
   
    const config = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    };

    const login = async (formData) => {
        dispatch({
            type: LOADING,
            payload: true
        });
        try {
            //If there is need to do any conditional stuff.
            const response = await apiPost(`/api/v1/login`, formData, config, false);
            const {exp} = jwt_decode(response.data.result.accessToken);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    ...response.data,
                    isAuthenticated: true,
                    expiresIn: exp
                }
            })
        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.message,
            });
        }
    }
    const logout = async (data) => {
        // const refreshToken = localStorage.getItem('refreshToken');
        try {
            await apiPost('/auth/logout', {}, {});
            dispatch({
                type: LOGOUT,
                payload: data
            });
        }catch (err){
            dispatch({
                type: LOGOUT_FAIL,
                payload: err.message
            });
        }
    }
    return (
        <AuthContext.Provider
        value={{
            loading: state.loading,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            error: state.error,
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined ){
        throw new Error("UseAuth must be used in an AuthProvider");
    }
    return context;
}
export default AuthState;