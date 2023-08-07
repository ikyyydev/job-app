import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Job from "../components/Job";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero/Hero";
import { RekrutKaryawan } from "../components/Rekrut/RekrutKaryawan";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Search />
      <Job />
      <RekrutKaryawan />
      <Footer />
    </>
  );
};

export default Home;
