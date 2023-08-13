import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import "./service.css";
import {
  HeroService,
  HeroServiceDua,
  HeroServiceTiga,
} from "../../components/HeroService/HeroService";
import Footer from "../../components/Footer/Footer";
import { HomeRekruitment } from "../../components/HomeRekruitment/HomeRekruitment";

const TipsKarir = () => {
  return (
    <>
      <NavbarComponent />
      <HeroService />
      <HeroServiceDua />
      <HeroServiceTiga />
      <HomeRekruitment />
      <Footer />
    </>
  );
};

export default TipsKarir;
