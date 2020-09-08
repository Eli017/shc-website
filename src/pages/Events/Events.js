import React from "react";
import * as styles from "./events.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ConstructionWarning from "../../components/ConstructionWarning/ConstructionWarning";

const Events = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.events}>
        <ConstructionWarning />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Events;
