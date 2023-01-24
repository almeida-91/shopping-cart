import React from "react";
import "./home.css";
import image from "./images/mike-petrucci-c9FQyqIECds-unsplash.jpg";

const HomePage = () => {
  const homeImg = document.createElement("img");
  homeImg.src = image;
  return (
    <div className="homeContainer">
      <p className="heroText">
        Consetetur justo amet est aliquyam at sanctus tempor diam accusam vero,
        ut invidunt stet elitr amet est labore. Rebum erat tempor eirmod sit
        diam, eirmod ipsum labore sed dolore voluptua. Diam sed stet ipsum
        accusam aliquyam et nonumy, sea sed rebum lorem magna sanctus ipsum
        consetetur dolor sit, tempor sit et dolor erat invidunt magna at. Sed
        lorem sadipscing sanctus dolore erat stet rebum clita, aliquyam tempor
        erat no rebum dolor nonumy, dolor aliquyam diam.
      </p>
      <img src={image} alt="shop sign" />
    </div>
  );
};

export default HomePage;
