import React, { useState } from "react";
import { Link } from "react-router-dom";

//icons
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";

//scss
import "./navbar.scss";
//images
import alien from "../../../assets/images/122098.jpg";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      <section
        className={isScrolled ? "main-container scrolled " : "main-container "}
      >
        <main className="container">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="netfilx"
            />
            <Link to="#" className="nav-link">
              Homepage
            </Link>
            <Link to="#" className="nav-link">
              Series
            </Link>
            <Link to="#" className="nav-link">
              Movies
            </Link>
            <Link to="#" className="nav-link">
              New and Pouplar
            </Link>
            <Link to="#" className="nav-link">
              My List
            </Link>
          </div>
          <div className="right">
            <Search className="icons" />
            <span>KID</span>
            <Notifications className="icons" />
            <img src={alien} alt="alien pic" />
            <div className="profile">
              <ArrowDropDown className="icons" />
              <div className="options">
                <Link to="#" className="profile-link">
                  Settings
                </Link>
                <Link tp="#" className="profile-link">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default NavBar;
