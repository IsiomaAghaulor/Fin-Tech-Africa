import { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "../reducers/authReducer";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [user, dispatch] = useReducer(AuthReducer, null)

  useEffect(() => {
  console.log(user)
//   const token = user;
// const decoded = jwt_decode(token);
// console.log(decoded)

  localStorage.setItem("userToken", user)
  },[user])
 
  return (
    <AuthContext.Provider value={{user, dispatch}}>
       {props.children}
    </AuthContext.Provider>
  )
}