import { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";

const Dashboard = lazy(() => import("../pages/dashboard"));
const Landing = lazy(() => import("../pages/landingpage"));
const Signup = lazy(() => import("../pages/signup"));
const Login = lazy(() => import("../pages/login"));
const TransactionHistory = lazy(() => import("../pages/TransactionHistoryPage"));

export const Routes = () => {
    //TODO protect the dashboard route.
  return (
    <Router>
      <RouterCover>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="TransactionHistory" element={<TransactionHistory />} />
      </RouterCover>
    </Router>
  );
};
export default Routes;
