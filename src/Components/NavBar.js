import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="NavBar">
      <div className="leftSide">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightSide">
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={() => {
            !show ? setShow(true) : setShow(false);
          }}
        ></i>
        <div className="links" id={show ? "show" : "notShow"}>
          <Link onClick={() => setShow(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setShow(false)} to="/menu">
            Menu
          </Link>
          <Link onClick={() => setShow(false)} to="/about">
            About
          </Link>
          <Link onClick={() => setShow(false)} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
