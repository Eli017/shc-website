import React from "react";
import { Link } from "react-router-dom";
import MySHC from "../../assets/icons/MySHC.png";
import FacebookIcon from "../../assets/icons/Facebook.png";
import TwitterIcon from "../../assets/icons/Twitter.png";
import InstagramIcon from "../../assets/icons/Instagram.png";
import SnapchatIcon from "../../assets/icons/Snapchat.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <section>
        <img src={MySHC} title={"MySHC Logo"} alt={"MySHC Logo"} className={"mySHCImage"} />
        <Link to={"/signIn"} className={"link"}>
          Login to mySHC
        </Link>
        <article>
          <a href={"https://facebook.com/bsushc"}>
            <img className={"socialIcon"} src={FacebookIcon} title={"Facebook Icon"} alt={"Facebook Icon"} />
          </a>
          <a href={"https://twitter.com/bsushc"}>
            <img className={"socialIcon"} src={TwitterIcon} title={"Twitter Icon"} alt={"Twitter Icon"} />
          </a>
          <a href={"https://instagram.com/bsushc"}>
            <img className={"socialIcon"} src={InstagramIcon} title={"Instagram Icon"} alt={"Instagram Icon"} />
          </a>
          <a href={"https://www.snapchat.com/add/bsushc"}>
            <img className={"socialIcon"} src={SnapchatIcon} title={"Snapchat Icon"} alt={"Snapchat Icon"} />
          </a>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
