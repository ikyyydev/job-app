import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import MyJob from "./pages/MyJob";
import CompanyProfile from "./pages/CompanyProfile";
import Service from "./pages/Service/Services";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { DetailJob } from "./pages/DetailJob/DetailJob";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Home />} />
        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/detail/:id" element={<DetailJob />} />
        <Route path="/myjob" element={<MyJob />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/service" element={<Service />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
