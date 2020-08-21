import React from "react";
import "./officerCard.scss";
import { Link } from "react-router-dom";

const OfficerCard = ({ name, position, photo, link }) => {
  return (
    <article className={"officerCard"}>
      <Link to={link}>
        <img className={"image"} src={photo} title={name} alt={name} />
      </Link>
      <Link to={link} style={{ textDecoration: "none" }}>
        <h3 className={"name"}>{name}</h3>
      </Link>
      <p className={"position"}>{position}</p>
    </article>
  );
};

export default OfficerCard;
