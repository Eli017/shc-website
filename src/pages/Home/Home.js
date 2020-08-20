import React from "react";
import "./home.scss";
import BuildingIcon from "../../assets/images/BuildingIcon.png";
import GroupIcon from "../../assets/images/GroupIcon.png";
import HandShakeIcon from "../../assets/images/HandShakeIcon.png";
import CoreValue from "../../components/CoreValue/CoreValue";

const Home = () => {
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
      <h2>Our Events</h2>
      <h2>Interested in joining? Have a question? Let us know.</h2>
    </main>
  );
};

export default Home;
