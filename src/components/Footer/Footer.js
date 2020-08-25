import React from "react";
import { Link } from "react-router-dom";
import MySHC from "../../assets/icons/MySHC.png";
import FacebookIcon from "../../assets/icons/Facebook.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <article>
        <img src={MySHC} title={"MySHC Logo"} alt={"MySHC Logo"} className={"mySHCImage"} />
        <Link to={"/login"} className={"link"}>
          Login to mySHC
        </Link>
        <Link to={"https://facebook.com/bsushc"}>
          <img className={"socialIcon"} src={FacebookIcon} title={"Facebook Icon"} alt={"Facebook Icon"} />
        </Link>
      </article>
    </footer>
  );
};

export default Footer;
