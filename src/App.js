import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Features from "./component/Features";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import List from "./component/List";
import Hero from "./component/Hero/Hero";
import TransactionHistory from "./component/TransactionHistoryPage/index";

function App() {
  return (
    <div className="App">
      <>
        {/* <List /> */}
        {/* <Hero /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="Features" element={<Features />} />
          <Route path="About" element={<About />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Error" element={<Error />} />
          <Route path="TransactionHistory" element={<TransactionHistory />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
