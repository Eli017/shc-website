import React from "react";
import SHCLogo from "../../assets/images/SHCLogo.png";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", text: "Home" },
  { path: "/honors", text: "Honors College", dropDown: true },
  { path: "/contact", text: "Contact" },
];

const Header = () => {
  return (
    <header>
      <NavLink exact to={"/"}>
        <img src={SHCLogo} title="SHC Logo" alt="SHC Logo" />
      </NavLink>
      <nav>
        <ul>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
