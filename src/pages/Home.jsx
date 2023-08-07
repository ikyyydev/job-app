import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Job from "../components/Job";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Search />
      <Job />
      <Footer />
    </>
  );
};

export default Home;
