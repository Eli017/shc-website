import React, { useState } from "react";
import "./navigationModal.scss";
import { NavLink } from "react-router-dom";
import { useModal } from "../../contexts/useModal";

const defaultLinks = [
  { path: "/", text: "Home", isDropDown: false },
  { text: "About Us", isDropDown: true },
  { path: "/calendar", text: "Calendar", isDropDown: false },
  { path: "/officers", text: "Officers", isDropDown: false },
  { path: "/contact", text: "Contact Us", isDropDown: false },
];

const defaultAdditionalLinks = [
  { path: "/honors", text: "The Honors College" },
  { path: "/membership", text: "Membership" },
  { path: "/events", text: "Events" },
  { path: "/community", text: "Community" },
];

const NavigationModal = ({ links = defaultLinks, additionalLinks = defaultAdditionalLinks }) => {
  const { setModal } = useModal();
  const [step, setStep] = useState(false);

  return (
    <section className={"navigationModal"}>
      <button className={"exit"} onClick={() => setModal(undefined)}>
        X
      </button>
      <ol>
        {!step &&
          links.map((link, i) => {
            if (link.isDropDown) {
              return (
                <li key={i}>
                  <button onClick={() => setStep(true)}>About Us</button>
                </li>
              );
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
        {step &&
          additionalLinks.map((link, i) => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <li key={i} onClick={() => setModal(undefined)}>
                <NavLink exact to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            );
          })}
      </ol>
      {step && (
        <button className={"back"} onClick={() => setStep(false)}>
          Back
        </button>
      )}
    </section>
  );
};

export default NavigationModal;
