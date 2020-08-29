import React from "react";
import "./404.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Page404 = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={"page404"}>
        <h1>Sorry!</h1>
        <h2>Page Not Found</h2>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Page404;
