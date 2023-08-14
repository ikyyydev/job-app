import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import "./service.css";
import {
  HeroService,
  HeroServiceDua,
  HeroServiceEmpat,
  HeroServiceTiga,
} from "../../components/HeroService/HeroService";
import Footer from "../../components/Footer/Footer";
import { HomeRekruitment } from "../../components/HomeRekruitment/HomeRekruitment";
import { CompanyList } from "../../components/CompanyList/CompanyList";

const TipsKarir = () => {
  return (
    <>
      <NavbarComponent />
      <HeroService />
      <HeroServiceDua />
      <HeroServiceTiga />
      <HeroServiceEmpat />
      <CompanyList />
      <HomeRekruitment />
      <Footer />
    </>
  );
};

export default TipsKarir;
