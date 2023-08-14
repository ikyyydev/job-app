import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import MyJob from "./pages/MyJob";
import CompanyProfile from "./pages/CompanyProfile";
import Service from "./pages/Service/Services";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { DetailJob } from "./pages/DetailJob/DetailJob";
import { Account } from "./pages/Account/Account";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Login />} exact />
          <Route path="/signup" element={<Register />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/findjobs" element={<FindJobs />} exact />
          <Route path="/detail/:id" element={<DetailJob />} exact />
          <Route path="/myjob" element={<MyJob />} exact />
          <Route path="/companyprofile" element={<CompanyProfile />} exact />
          <Route path="/service" element={<Service />} exact />
          <Route path="/account" element={<Account />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
