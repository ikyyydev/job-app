import React, { useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Job from "../components/Job";
import Footer from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { RekrutKaryawan } from "../components/Rekrut/RekrutKaryawan";
import { HomeRekruitment } from "../components/HomeRekruitment/HomeRekruitment";
import { CompanyList } from "../components/CompanyList/CompanyList";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Job />
      <RekrutKaryawan />
      <CompanyList />
      <HomeRekruitment />
      <Footer />
    </>
  );
};

export default Home;
