import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import MyJob from "./pages/MyJob";
import CompanyProfile from "./pages/CompanyProfile";
import Service from "./pages/Service/Services";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/myjob" element={<MyJob />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
