import React from "react";
import "./officerBoard.scss";
import OfficerCard from "../OfficerCard/OfficerCard";
import BobbieBurton from "../../assets/images/BobbieBurton.png";
import TannerPrewitt from "../../assets/images/TannerPrewitt.png";
import GraceBabcock from "../../assets/images/GraceBabcock.png";
import LoganArnold from "../../assets/images/LoganArnold.png";
import RoseWinters from "../../assets/images/RoseWinters.png";
import EliSokeland from "../../assets/images/EliSokeland.jpg";

const OfficerBoard = () => {
  return (
    <section className={"officerBoard"}>
      <OfficerCard name={"Tanner Prewitt"} position={"President"} photo={TannerPrewitt} link={"/officers/president"} />
      <OfficerCard
        name={"Bobbie Burton"}
        position={"Vice President"}
        photo={BobbieBurton}
        link={"/officers/vice-president"}
      />
      <OfficerCard
        name={"Rose Winters"}
        position={"Director of Administrative Affairs"}
        photo={RoseWinters}
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
