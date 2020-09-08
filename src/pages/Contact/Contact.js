import React from "react";
import * as styles from "./contact.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ConstructionWarning from "../../components/ConstructionWarning/ConstructionWarning";

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.contact}>
        <ConstructionWarning />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
