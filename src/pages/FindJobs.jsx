import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer/Footer";
import { Jobs } from "../components/Jobs/Jobs";

const FindJobs = () => {
  return (
    <>
      <NavbarComponent />
      <Jobs />
      <Footer />
    </>
  );
};

export default FindJobs;
