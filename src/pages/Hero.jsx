import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "../styles/Hero.css";
import image1 from "../assets/tinified/blue-figure.jpg";
import image2 from "../assets/tinified/sittingBlueFigure.jpg";
import image3 from "../assets/tinified/greenFigure.jpg";
import image4 from "../assets/tinified/purpleFigure.jpg";
import image5 from "../assets/tinified/redRunningFigure.jpg";
import image6 from "../assets/tinified/yellowFigure.jpg";
import image7 from "../assets/tinified/orangeFigure.jpg";
import image8 from "../assets/tinified/maroonFigure.jpg";
import image9 from "../assets/tinified/darkGreenFigure.jpg";
import image10 from "../assets/tinified/darkBlueFigure.jpg";

const Hero = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade-in
      }, 500); // Short delay before switching images
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="hero-container">
        {/* Hero Section */}
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-md-6 ">
            <img
              className={`img-fluid hero-image ${fade ? "fade-in" : "fade-out"}`}
              src={images[currentIndex]}
              alt={`Artwork ${currentIndex + 1}`}
            />
            </div>
            <div className="content col-md-6">
              <h1 className="heroName display-4 fw-bold">Welcome Friends!</h1>
              <p className="lead">
                Art has been a lifelong passion, and I believe it plays an
                essential role in learning — helping students develop
                confidence, problem-solving skills, and a sense of personal
                expression!
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                {/* <button type="button" className="btn btn-primary btn-lg">
                  About Me
                </button> */}
                <Link to="/molly-serrano/album" className="btn btn-primary btn-lg">
                  View my gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
