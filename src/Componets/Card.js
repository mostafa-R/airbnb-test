import React from "react";
import photo1 from "../images/photo_1.jpg";
import photo2 from "../images/photo_2.jpg";
import photo3 from "../images/photo_3.jpg";
import star from "../images/star.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card1">
        <img src={photo1} alt="" className="card-image"></img>
        <img src={star} alt="" className="card-star" />
        <span>5.0</span>
        <span className="gray">(6) . </span>
        <span className="gray">USA</span>
        <p className="card-title">Life lessons with Katie Zaferes</p>
        <p className="card-price">
          <span className="bold">From </span> $136 / person
        </p>
      </div>
      <div className="card2">
        <img src={photo2} alt="" className="card-image"></img>
        <img src={star} alt="" className="card-star" />
        <span>5.0</span>
        <span className="gray">(6) . </span>
        <span className="gray">USA</span>
        <p className="card-title">Learn wedding photography</p>
        <p className="card-price">
          <span className="bold">From </span> $136 / person
        </p>
      </div>
      <div className="card3">
        <img src={photo3} alt="" className="card-image"></img>
        <img src={star} alt="" className="card-star" />
        <span>5.0</span>
        <span className="gray">(6) . </span>
        <span className="gray">USA</span>
        <p className="card-title">Group Mountain Biking</p>
        <p className="card-price">
          <span className="bold">From </span> $136 / person
        </p>
      </div>
    </div>
  );
}

export default Card;
