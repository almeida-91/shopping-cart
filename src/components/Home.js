import React from "react";
import "./home.css";
import image from "./images/mike-petrucci-c9FQyqIECds-unsplash.jpg";

const HomePage = () => {
  const homeImg = document.createElement("img");
  homeImg.src = image;
  return (
    <div className="homeContainer">
      <p className="heroText">
        Here at generic shop, we have products for generic people, including :
        generic poor people, generic middle class people and generic rich
        people.
        <br /> We'll be happy to take your order anytime, and with our online
        shop, from anywhere in the world (assuming you have an internet
        connection), if you want something, from generic to not generic, we
        certainly have it.
        <br />
        <br /> Happy shopping, from the Generic Staff Team.
      </p>
      <p className="pictureCredit">
        Picture by{" "}
        <a href="https://unsplash.com/@mikepetrucci">Mike Petrucci</a> on{" "}
        <a href="https://unsplash.com/">Unsplash</a>
      </p>
    </div>
  );
};

export default HomePage;
