import React from "react";
import * as styles from "./honorsCollege.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ConstructionWarning from "../../components/ConstructionWarning/ConstructionWarning";

const HonorsCollege = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.honorsCollege}>
        <ConstructionWarning />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default HonorsCollege;
