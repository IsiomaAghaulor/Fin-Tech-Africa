import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landingpage";
import Login from"../pages/login";

export const Routes = () => {
    //TODO protect the dashboard route.
  return (
    <Router>
      <RouterCover>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </RouterCover>
    </Router>
  );
};
export default Routes;
