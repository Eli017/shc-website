import React from "react";
import ConstructionLogo from "../../assets/icons/ConstructionIcon.png";
import * as styles from "./constructionWarning.module.scss";

const ConstructionWarning = () => {
  return (
    <section className={styles.constructionWarning}>
      <img src={ConstructionLogo} title={"Construction Logo"} alt={"Construction Logo"} />
      <h3>Sorry, this page is under construction!</h3>
    </section>
  );
};

export default ConstructionWarning;