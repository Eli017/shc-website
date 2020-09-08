import React from "react";
import * as styles from "./membership.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ConstructionWarning from "../../components/ConstructionWarning/ConstructionWarning";

const Membership = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.membership}>
        <ConstructionWarning />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Membership;
