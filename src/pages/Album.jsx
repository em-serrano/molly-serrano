import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../styles/Album.css";
import image1 from "../assets/Gallery-Images/blueMug.jpg";
import image2 from "../assets/Gallery-Images/platesAndMugsTopView.jpg";
import image3 from "../assets/Gallery-Images/leafPlates.jpg";
import image4 from "../assets/Gallery-Images/woodenMugs3.jpg";
import image5 from "../assets/Gallery-Images/mugsAndPlates.jpg";
import image6 from "../assets/Gallery-Images/woodenMugs1.jpg";
import image7 from "../assets/Gallery-Images/woodenMugs2.jpg";
import image8 from "../assets/Gallery-Images/mollyAtTable.jpg";
import image9 from "../assets/Gallery-Images/handWoodenMugs.jpg";
import image10 from "../assets/Gallery-Images/mugsCloseUp.jpg";
import image11 from "../assets/Gallery-Images/mysteryMug.jpg";
import image12 from "../assets/Gallery-Images/bootyMug.jpg";
import image13 from "../assets/Gallery-Images/darkBlueMug.jpg";
import image14 from "../assets/Gallery-Images/blueCup.jpg";
import image15 from "../assets/Gallery-Images/studentPlates.jpg";
import image16 from "../assets/Gallery-Images/insideCup.jpg";
import image17 from "../assets/Gallery-Images/blueCups.jpg";
import image18 from "../assets/Gallery-Images/Lines2.jpg";
import image19 from "../assets/Gallery-Images/Lines1.jpg";
import image20 from "../assets/Gallery-Images/artTable.jpg";
import image21 from "../assets/Gallery-Images/blueAndWhiteCup.jpg";
import image22 from "../assets/Gallery-Images/essentia.jpeg";
import image23 from "../assets/Gallery-Images/galleryYellowFigure.jpeg";
import image24 from "../assets/Gallery-Images/orangeFigure.jpeg";
import image25 from "../assets/Gallery-Images/sittingBlueFigure.jpeg";
import image26 from "../assets/Gallery-Images/galleryGreenLayingFigure.jpeg";
import image27 from "../assets/Gallery-Images/galleryLightBlueFigure.jpeg";
import image28 from "../assets/Gallery-Images/galleryRedRunningFigure.jpeg";
import image29 from "../assets/Gallery-Images/galleryDarkGreenFigure.jpeg";
import image30 from "../assets/Gallery-Images/galleryDarkBlueFigure.jpeg";
import image31 from "../assets/Gallery-Images/gallerySittingPurpleFigure.jpeg";
import image32 from "../assets/Gallery-Images/galleryOrangeFigure.jpeg";
import image33 from "../assets/Gallery-Images/galleryGreenFigure.jpeg";
import image34 from "../assets/Gallery-Images/galleryFrontOfMug.jpeg";
import image35 from "../assets/Gallery-Images/galleryWoodenBall.jpeg";
import image36 from "../assets/Gallery-Images/bust1.jpg";
import image37 from "../assets/Gallery-Images/bust2.jpg";
import image38 from "../assets/Gallery-Images/bust3.jpg";
import image39 from "../assets/Gallery-Images/bust4.jpg";
import image40 from "../assets/Gallery-Images/bust5.jpg";
import image41 from "../assets/Gallery-Images/blueRidgeLaying.jpg";
import image42 from "../assets/Gallery-Images/insideRidgeMug.jpg";
import image43 from "../assets/Gallery-Images/woodAndWire1.jpg";
import image44 from "../assets/Gallery-Images/woodAndWire2.jpg";
import image46 from "../assets/Gallery-Images/woodStatue2.jpg";


const Album = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

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
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image46,

  ];

  const slides = images.map((src) => ({ src }));

  return (
    <>
      <main className="album-container" role="main">
        {/* <section className=" jumbotron text-center">
          <div className="album-header container">
          <p className="lead text-muted"> 
        
        </p>
            <p>
            <a
            href="https://getbootstrap.com/docs/4.4/examples/album/#"
            className="btn btn-primary"
            >
            Home
            </a>
         <a
                href="https://getbootstrap.com/docs/4.4/examples/album/#"
                className="btn btn-primary"
                >
                Secondary action
                </a>
         </p>
          </div>
          </section>  */}
        <div className="album py-5">
          {/* <div className="col-md-6">
            <h1 className="jumbotron text-center heroName display-6 fw-bold">My Pottery and Prints:</h1>
          </div> */}
          <div className="container">
            <div className="row">
              {images.map((image, index) => (
                <div className="col-md-4" key={index}>
                  <div onClick={() => openLightbox(index)} className="card mb-4 shadow-sm album-card">
                    <img
                      className="bd-placeholder-img album-image card-img-top"
                      width="100%"
                      height="100%"
                      src={image}
                      focusable="false"
                      alt={`Thumbnail ${index + 1}`}
                      loading="lazy"
                      
                    />
                    <div  className="card-body">
                      <p className="card-text"></p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group card-buttons">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => openLightbox(index)}
                          >
                            View
                          </button>

                          {/* <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            slides={slides}
            index={currentImageIndex}
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
          />
        )}
      </main>
    </>
  );
};

export default Album;
