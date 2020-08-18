import React from "react";
import "./navigationModal.scss";
import { NavLink } from "react-router-dom";
import DropDownNav from "../DropDownNav/DropDownNav";
import { useModal } from "../../contexts/useModal";

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

const NavigationModal = () => {
  const { setModal } = useModal();

  return (
    <section className={"navigationModal"}>
      <button className={"exit"} onClick={() => setModal(undefined)}>
        X
      </button>
      <ol>
        {links.map((link, i) => {
          if (link.isDropDown) {
            return <DropDownNav key={i} name={link.text} dropDownLinks={dropDownLinks} />;
          } else {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <li key={i} onClick={() => setModal(undefined)}>
                <NavLink exact to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            );
          }
        })}
      </ol>
    </section>
  );
};

export default NavigationModal;
