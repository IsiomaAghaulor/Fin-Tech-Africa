import { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";

const Dashboard = lazy(() => import("../pages/dashboard"));
const Landing = lazy(() => import("../pages/landingpage"));
const Login = lazy(() => import("../pages/login"));
const VerifyEmailRegistration = lazy(() => import("../pages/registration/VerifyEmailRegistration"));
const SignUp = lazy(() => import("../pages/registration/SignUp"));
const EmailVerification = lazy(() => import("../pages/emailVerification/EmailVerification"))

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
