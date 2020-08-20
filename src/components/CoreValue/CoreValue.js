import React from "react";
import { useHistory } from "react-router";

const CoreValue = ({ imageSource, imageDescription, title, description, link }) => {
  const { history } = useHistory();

  return (
    <article>
      <img src={imageSource} title={imageDescription} alt={imageDescription} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => history.push(link)}>Learn More</button>
    </article>
  );
};

export default CoreValue;
