import React from "react";
import { NavLink } from "react-router-dom";
import SHCLogo from "../../assets/images/SHCLogo.png";
import DropDownNav from "../DropDownNav/DropDownNav";
import "./header.scss";

const links = [
  { path: "/", text: "Home", isDropDown: false },
  { text: "About Us", isDropDown: true },
  { path: "/calendar", text: "Calendar", isDropDown: false },
  { path: "/officers", text: "Officers", isDropDown: false },
  { path: "/contact", text: "Contact Us", isDropDown: false },
];

const dropDownLinks = [
  { path: "/honors", text: "The Honors College" },
  { path: "/membership", text: "Membership" },
  { path: "/events", text: "Events" },
  { path: "/community", text: "Community" },
];

const Header = () => {
  return (
    <header className={"visitorHeader"}>
      <NavLink exact to={"/"}>
        <img src={SHCLogo} title="SHC Logo" alt="SHC Logo" />
      </NavLink>
      <nav>
        <ul>
          {links.map((link, i) => {
            if (link.isDropDown) {
              return <DropDownNav name={link.text} dropDownLinks={dropDownLinks} />
            } else {
              return (
                <li key={i}>
                  <NavLink exact to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
