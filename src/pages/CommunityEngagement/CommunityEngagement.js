import React from "react";
import * as styles from "./communityEngagement.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ConstructionWarning from "../../components/ConstructionWarning/ConstructionWarning";

const CommunityEngagement = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.communityEngagement}>
        <ConstructionWarning />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default CommunityEngagement;
