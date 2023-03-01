import React from "react";
import image from "../images/hero.jpeg";

function Hero() {
  return (
    <section className="hero">
      <img className="image" src={image} alt=""></img>
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-parg">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
