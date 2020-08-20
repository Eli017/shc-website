import React from "react";
import "./officerBoard.scss";
import OfficerCard from "../OfficerCard/OfficerCard";

const OfficerBoard = () => {
  return (
    <section className={"officerBoard"}>
      <OfficerCard />
    </section>
  );
};

export default OfficerBoard;
