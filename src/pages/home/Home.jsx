import React, { useState } from "react";
import { Featured } from "../../components";
import { List } from "../../components";
import { NavBar } from "../partials/navbar/NavBar";
//scss
import "./home.scss";
//images
const Home = () => {
  return (
    <>
      <main className="home">
        <NavBar />
        <Featured type="movie" />
        <List />
        <List />
      </main>
    </>
  );
};

export default Home;
