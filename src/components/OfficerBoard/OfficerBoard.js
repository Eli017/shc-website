import React from "react";
import "./officerBoard.scss";
import OfficerCard from "../OfficerCard/OfficerCard";
import BobbieBurton from "../../assets/images/BobbieBurton.png";
import TannerPrewitt from "../../assets/images/TannerPrewitt.png";
import KyraChristiansen from "../../assets/images/KyraChristiansen.jpg";
import RebeccaConrad from "../../assets/images/RebeccaConrad.jpg";
import EliSokeland from "../../assets/images/EliSokeland.jpg";
import ZachJohnson from "../../assets/images/ZachJohnson.jpg";

const OfficerBoard = () => {
  return (
    <section className={"officerBoard"}>
      <OfficerCard name={"Zach Johnson"} position={"President"} photo={ZachJohnson} link={"/officers/president"} />
      <OfficerCard name={"Tanner Prewitt"} position={"Vice President"} photo={TannerPrewitt} link={"/officers/vice-president"} />
      <OfficerCard name={"Rebecca Conrad"} position={"Director of Administrative Affairs"} photo={RebeccaConrad} link={"/officers/records"} />
      <OfficerCard name={"Kyra Christiansen"} position={"Director of Awards and Engagement"} photo={KyraChristiansen} link={"/officers/awards"} />
      <OfficerCard name={"Eli Sokeland"} position={"Director of Online Operations"} photo={EliSokeland} link={"/officers/online"} />
      <OfficerCard name={"Bobbie Burton"} position={"Director of Promotions"} photo={BobbieBurton} link={"/officers/promotions"} />
    </section>
  );
};

export default OfficerBoard;
