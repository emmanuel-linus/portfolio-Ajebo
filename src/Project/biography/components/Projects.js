import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Projects.css";
import work from "../styles/work.jpg";
import work2 from "../styles/work2.jpg";
import work4 from "../styles/work4.jpg";
import work3 from "../styles/work3.jpg";
import script from "../styles/script.jpg";
import work5 from "../styles/work5.png";
import work6 from "../styles/work6.png";
import work7 from "../styles/work7.png";
import work8 from "../styles/work8.png";
import work9 from "../styles/work9.png";

const Projects = () => {
  return (
    <div className="projectBody">
      <Header />

      <div className="projectBounce">
        <h1> COMMUNITY SERVICES </h1>
        <h5>
          Championed by me to fix the damaged part of Sarkin Yarki Road in Sabon
          Gari Kano
        </h5>
        <div className="small">
          <img src={work} />
          <img src={work2} />
        </div>
        <div className="big">
          <img src={work4} />
          <img src={work3} className="pix" />
        </div>
      </div>

      <div className="projectFiles">
        <div>
          <h3>INTERVIEW</h3>
          <hr />
          <p>
            my interview with Omoyele Sowore during the 2019 General election
          </p>

          <a
            href="https://youtu.be/Sf1PYWz4Q4o 
"
          >
            <li>interview with Omoyele Sowore</li>
          </a>
          <p>i hosted the Mandela's foundation summit in abuja</p>
          <h6></h6>
        </div>

        <div>
          <h3>PROMOTING UP-COMING ARTISTE </h3>
          <hr />
          <p>Head of interns in wazobiafm</p>
          <div className="germ">
            <img src={script} />
            <img src={work5} className="gal" />
          </div>
        </div>

        <div>
          <h3>HOST KDC AWARD</h3>
          <hr />

          <div className="caught">
            <img src={work7} />
            <img src={work8} />
          </div>
          <h3>HOST MD'S AWARD</h3>
          <div className="long">
            <img src={work6} />
            <img src={work9} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Projects;
