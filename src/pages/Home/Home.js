import React, { useEffect } from "react";
import "./home.scss";
import BuildingIcon from "../../assets/icons/BuildingIcon.png";
import GroupIcon from "../../assets/icons/GroupIcon.png";
import HandShakeIcon from "../../assets/icons/HandShakeIcon.png";
import CoreValue from "../../components/CoreValue/CoreValue";
import OfficerBoard from "../../components/OfficerBoard/OfficerBoard";
import * as Firebase from "firebase";
import Link from "react-router-dom/modules/Link";

const Home = () => {
  const database = Firebase.firestore();

  const docReference = database.collection("users");

  const grabFirebaseUsers = () => {
    docReference.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });
  };

  // eslint-disable-next-line no-undef
  useEffect(() => {
    grabFirebaseUsers();
  });

  return (
    <main className={"home"}>
      <h2>What is Student Honors Council?</h2>
      <section className={"coreValues"}>
        <CoreValue
          imageSource={BuildingIcon}
          imageDescription={"Agora"}
          title={"Student Governance"}
          description={
            "Student Honors Council serves as the student-governing body of the Ball State University Honors College. We work very closely with Honors College administration to collaborate on events and voice student feedback."
          }
          link={"/honors"}
        />
        <CoreValue
          imageSource={GroupIcon}
          imageDescription={"Group"}
          title={"Academic and Social Events"}
          description={
            "Student Honors Council hosts various academic and social events, such as the Curriculum Crash Course and Haunted Honors House. We have partnered with other on-campus organizations, such as the Student Government Association and Residents of DeHority to host programs like these."
          }
          link={"/events"}
        />
        <CoreValue
          imageSource={HandShakeIcon}
          imageDescription={"Community"}
          title={"Community Engagement"}
          description={
            "Student Honors Council not only works with the Ball State community, but we also work with the Muncie community, too. By participating in service opportunities such as volunteering at Camp Adventure or the Ross Community Center, our members work hard to give back to the community as a whole."
          }
          link={"/community"}
        />
      </section>
      <h2>Meet your 2020-2021 Executive Board</h2>
      <OfficerBoard />
      <h2 className={"contactHeader"}>Interested in joining? Have a question? Let us know.</h2>
      <Link to={"/contact"} className={"link"}>
        Contact Us
      </Link>
    </main>
  );
};

export default Home;
