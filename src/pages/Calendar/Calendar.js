import React from "react";
import * as styles from "./calendar.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ConstructionWarning from "../../components/ConstructionWarning/ConstructionWarning";

const Calendar = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.calendar}>
        <ConstructionWarning />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Calendar;
