import React from "react";
import "./coreValue.scss";
import { Link } from "react-router-dom";

const CoreValue = ({ imageSource, imageDescription, title, description, link }) => {
  return (
    <article className={"coreValue"}>
      <img src={imageSource} title={imageDescription} alt={imageDescription} className={"valueImage"} />
      <h3 className={"title"}>{title}</h3>
      <p className={"description"}>{description}</p>
      <Link to={link} className={"link"}>
        Learn More
      </Link>
    </article>
  );
};

export default CoreValue;
