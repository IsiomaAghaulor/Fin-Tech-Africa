import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landingpage";
import Login from"../pages/login/login";
import VerifyEmailRegistration from "../pages/registration/VerifyEmailRegistration";
import SignUp from "../pages/registration/SignUp";
import EmailVerification from "../pages/emailVerification/EmailVerification";

export const Routes = () => {
    //TODO protect the dashboard route.
  return (
    <Router>
      <RouterCover>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/verify-email' element={< VerifyEmailRegistration />}/>
        <Route path='/signup' element={< SignUp />}/>
        <Route path='/verifyRegistration' element={< EmailVerification />}/>
      </RouterCover>
    </Router>
  );
};
export default Routes;
