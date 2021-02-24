import React from "react";
import "./officerBoard.scss";
import OfficerCard from "../OfficerCard/OfficerCard";
import BobbieBurton from "../../assets/images/BobbieBurton.png";
import GraceBabcock from "../../assets/images/GraceBabcock.png";
import LoganArnold from "../../assets/images/LoganArnold.png";
import RoseWinters from "../../assets/images/RoseWinters.png";
import EliSokeland from "../../assets/images/EliSokeland.jpg";
import SusanFleshman from "../../assets/images/SusanFleshman.png";

const OfficerBoard = () => {
  return (
    <section className={"officerBoard"}>
      <OfficerCard name={"Rose Winters"} position={"President"} photo={RoseWinters} link={"/officers/president"} />
      <OfficerCard
        name={"Bobbie Burton"}
        position={"Vice President"}
        photo={BobbieBurton}
        link={"/officers/vice-president"}
      />
      <OfficerCard
        name={"Susan Fleshman"}
        position={"Director of Administrative Affairs"}
        photo={SusanFleshman}
        link={"/officers/records"}
      />
      <OfficerCard
        name={"Logan Arnold"}
        position={"Director of Awards and Engagement"}
        photo={LoganArnold}
        link={"/officers/awards"}
      />
      <OfficerCard
        name={"Eli Sokeland"}
        position={"Director of Online Operations"}
        photo={EliSokeland}
        link={"/officers/online"}
      />
      <OfficerCard
        name={"Grace Babcock"}
        position={"Director of Promotions"}
        photo={GraceBabcock}
        link={"/officers/promotions"}
      />
    </section>
  );
};

export default OfficerBoard;
