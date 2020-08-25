import React from "react";
import { Link } from "react-router-dom";
import MySHC from "../../assets/images/MySHC.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <article>
        <img src={MySHC} title={"MySHC Logo"} alt={"MySHC Logo"} className={"mySHCImage"} />
        <Link to={"/login"} className={"link"}>
          Login to mySHC
        </Link>
      </article>
    </footer>
  );
};

export default Footer;
