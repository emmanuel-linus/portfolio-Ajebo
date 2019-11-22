import React from "react";
import "../styles/Gallery.css";
import bee from "../styles/bee.jpg";
import classic from "../styles/classic.jpg";
import book from "../styles/book.jpg";
import be from "../styles/be.jpg";
import alive from "../styles/alive.jpg";
import a from "../styles/a.jpg";
import calz from "../styles/calz.jpg";
import cute from "../styles/cute.jpg";
import fun from "../styles/fun.jpg";
import famous from "../styles/famous.jpg";
import forb from "../styles/forb.jpg";
import god from "../styles/god.jpg";
import family from "../styles/family.jpg";
import kiss from "../styles/kiss.jpg";
import rep from "../styles/rep.jpg";
import hangut from "../styles/hangut.jpg";
import j from "../styles/j.jpg";
import s from "../styles/s.jpg";
import Header from "./Header";
import Footer from "./Footer";

const Gallery = () => {
  return (
    <div className="imgContainer">
      <Header />
      <div>
        <center>
          <h1> GALLERY </h1>
          <hr />
        </center>
      </div>

      <center>
        <slider key="id">
          <slide className="one">
            <img src={bee} />
          </slide>
          <slide className="one">
            <img src={alive} />
          </slide>
          <slide className="one">
            <img src={fun} />
          </slide>
          <slide className="one">
            <img src={a} />
          </slide>
          <slide className="one">
            <img src={calz} />
          </slide>
          <slide className="one">
            <img src={cute} />
          </slide>
          <slide className="one">
            <img src={famous} />
          </slide>
          <slide className="one">
            <img src={be} />
          </slide>
          <slide className="one">
            <img src={classic} />
          </slide>
          <slide className="one">
            <img src={book} />
          </slide>
          <slide className="one">
            <img src={forb} />
          </slide>
          <slide className="one">
            <img src={god} />
          </slide>
          <slide className="one">
            <img src={family} />
          </slide>
          <slide className="one">
            <img src={kiss} />
          </slide>
          <slide className="one">
            <img src={rep} />
          </slide>
          <slide className="one">
            <img src={hangut} />
          </slide>
          <slide className="one">
            <img src={j} />
          </slide>
          <slide className="one">
            <img src={s} />
          </slide>
        </slider>
      </center>

      {/* <Footer /> */}
    </div>
  );
};
export default Gallery;
