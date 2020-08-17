import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./dropDownNav.scss";

const DropDownNav = ({ name, dropDownLinks }) => {
  const [dropDownEnabled, setDropDownEnabled] = useState(false);

  return (
    <li className={"dropDownNav"}>
      <button onClick={() => setDropDownEnabled(!dropDownEnabled)}>{name}</button>
      {dropDownEnabled && (
        <ol>
          {dropDownLinks.map((dropDownLink, i) => (
            <li key={i}>
              <NavLink exact to={dropDownLink.path}>
                {dropDownLink.text}
              </NavLink>
            </li>
          ))}
        </ol>
      )}
    </li>
  );
};

export default DropDownNav;
