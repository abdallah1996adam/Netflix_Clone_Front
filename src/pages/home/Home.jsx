import React, { useState } from "react";
import { Featured } from "../../components";

import { NavBar } from "../partials/navbar/NavBar";
//scss
import "./home.scss";
//images
const Home = () => {
  return (
    <>
      <main className="home">
        <NavBar />
        <Featured />
      </main>
    </>
  );
};

export default Home;
