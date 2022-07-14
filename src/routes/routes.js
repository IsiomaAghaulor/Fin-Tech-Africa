import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landingpage";
import Login from"../pages/login";
import Profile from"../pages/profile/ProfilePage";
import LocalTransfer from"../pages/localtransfer/LocalTransferPage";
import AuthState from "../reducers/authState";
import ResetPassword from "../pages/resetPassword";

export const Routes = () => {
    //TODO protect the dashboard route.
  return (
    <Router>
      <AuthState>
      <RouterCover>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transfer" element={<LocalTransfer />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </RouterCover>
      </AuthState>
    </Router>

  );
};
export default Routes;
