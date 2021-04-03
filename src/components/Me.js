import React, { Component } from "react";

class Me extends Component {
  render() {
    //an image, two paragraph
    return (
      <div className="about_me">
        <img id="user_img" src="cat.svg" alt="A cat" />
        <h1 id="username">Hi there! I'm Akshay</h1>
        <p>
          I am an international student from Bangalore, India. I am a Software
          developer with 4 years of experience. I like travelling and playing
          guitar.{" "}
        </p>
        <p>
          I joined MCDA course beacuse of my interest in data and it's business
          and social applications.
        </p>
      </div>
    );
  }
}

export default Me;
