// Home page

import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); //Sidebar properties access{opasity and top}

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
    </>
  );
};

export default Home;