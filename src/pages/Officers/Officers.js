import React from "react";
import * as styles from "./officers.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ConstructionWarning from "../../components/ConstructionWarning/ConstructionWarning";

const Officers = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.officers}>
        <ConstructionWarning />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Officers;
