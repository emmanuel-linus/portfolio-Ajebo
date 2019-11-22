import React from "react";
import "../styles/About.css";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      <div className="groupie">
        <div className="tech">
          <div className="inner">
            <h1>PROFESSIONAL EXPERIENCE</h1>
            <p>
              <b>We the people Movement</b> Jan. 2019-present. <br></br>
              Convener | Kano, Nigeria Social change ambassador
              <br /> in chief. The chief mobilizer and government alarm.
              encouraging self <br></br>
              Help and ownership of public infrastructure. encouraging the
              <br></br>
              Government to fix it timely!
            </p>
            <p>
              <b>
                Globe Broadcasting and Communications Limited (Wazobia FM Kano)
              </b>
              <br></br>
              Jan.2017-present. <br></br>
              Head of Events | Kano, Nigeria Officer in charge of Strategic
              <br></br>
              planing, creative Design, Budgeting and implementation of all
              <br></br>
              company events and brand visibility activities.
            </p>
            <p>
              <b>
                Globe Broadcasting and Communications Limited (Wazobia FM Kano)
              </b>
              <br></br>
              Jan.2017-present. <br></br>
              Head of Internship Desk | Kano, Nigeria. Officer in-charge of
              recruiting and training Interns, Supervising <br></br>
              and liaising with Higher institutions, writing reports and
              recommendations<br></br>
              as well as signing Log Books and issuing acceptance/Rejection and
              discharge letters.
            </p>
            <p>
              <b>
                Globe Broadcasting and Communications Limited (Wazobia FM Kano)
              </b>
              <br></br>
              May.2015-Nov. 2017. <br></br>
              Head of On-Air Personalities | Kano, Nigeria <br></br>
              Managed broadcast operations and coordination of all staff,
              Vetting show
              <br></br>
              content, monitoring competition and writing reports. Also reports
              <br></br>
              directly to the Head of Stations.
            </p>
            <p>
              <b>Gee Lo Events</b> Jan. 2007-Nov. 2011 <br></br>
              Projects Director | Makurdi,Benue State, Nigeria <br></br>
              Managed the strategic organization, planning,budgeting and
              execution of
              <br></br>
              BENUE GOT TALENT AND BENUE CULTURAL CARNIVAL.
            </p>
          </div>
        </div>

        <div className="fourth">
          <div className="inner">
            <div className="town">
              <h1>SKILLS</h1>
              <p>
                <b>Languages: </b>
                <br></br>
                •English (Full proficiency) <br></br>
                •Hausa (Intermediate proficiency)<br></br>
                •Pidgin Engish (Full proficiency)<br></br>
                •Tiv (Native speaker)
              </p>

              <p>
                <b>Software: </b>
                <br></br>
                •Internet/Email (Intermediate proficiency) <br></br>
                •Multimedia (Intermediate proficiency)<br></br>
                •Spreadsheet/Data Bases (Intermediate proficiency)<br></br>
                •Word Processing (Intermediate proficiency)
              </p>
            </div>
            <div className="city">
              <h1>EDUCATION</h1>
              <p>
                <b> Bayero University Kano</b> | Kano, Nigeria. <br></br>
                Masters in Public Relations, Public Relations<br></br>
                Professional Masters degree in Public Relations Practice
              </p>
              <p>
                <b>Benue State University</b> | Makurdi, Benue State, Nigeria
                <br></br>
                BS, Mass Communication <br></br>
                Bachelor of Science B.Sc (Hons) Mass Communication
              </p>
            </div>
          </div>
        </div>

        <div class="third">
          <div className="inner">
            <h1>HONOURS AND AWARDS</h1>
            <p>
              <h4>Merit Award</h4>
              Sep. 2019
              <br /> Community of Tiv Students COE Kano Received the CTS Merit
              award for <br /> tremendous contribution, Handwork and dedication
              towards Community Service.
            </p>
            <p>
              <h4>Kano State Merit Award</h4> Jul. 2018
              <br /> Road Traffic Department,Ministry of Works<br></br>
              Received the Kano state Ministry of Works Merit Award for Road
              Traffic
              <br></br>
              Safety Awareness Radio Program on Radio. the programe,Oga Driver
              airs <br></br>
              every tuesday 8- 8:30 am on Wazobia FM Kano.
            </p>
            <p>
              <h4>Best On-Air Personality</h4> Sep. 2017<br></br>
              Khalifa Dankadai Company (KDC) Foundation Received the KDC
              Foundation
              <br></br>
              award as the best On-Air Personality for the year 2017
            </p>
            <p>
              <h4>Merit Award</h4> Mar. 2016 <br></br>
              Benue State Students Association Bayero University Kano Received
              the
              <br></br>
              NUBESS Merit award for immense contribution to the development of
              Student.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
