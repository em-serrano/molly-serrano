import "/Users/miguelserrano/Projects/art-site-project/art-site/src/About.css";
import image1 from "/Users/miguelserrano/Projects/art-site-project/art-site/src/assets/londonBridge.jpeg";
import image2 from "/Users/miguelserrano/Projects/art-site-project/art-site/src/assets/atBeach.jpg";
import image3 from "/Users/miguelserrano/Projects/art-site-project/art-site/src/assets/ukFamily.jpeg";
import image4 from "/Users/miguelserrano/Projects/art-site-project/art-site/src/assets/famSelfie.jpeg";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="row gx-4 align-items-center justify-content-between">
          {/* Left Side: Content */}
          <div className="col-md-5 order-2 order-md-1">
            <div className="content-tile">
              <span className="text-muted">
                "Every child is an artist. The problem is how to remain an
                artist once we grow up." <span>— Pablo Picasso</span>
              </span>
              <h2>About Me:</h2>
              <p className="lead"> 
                I’ve been an elementary school teacher for the past five years.
                I spent my first three years teaching 1st grade before
                transitioning to 3rd grade last year, where I currently teach.
                Next year, I’m excited to step into a new role as an art
                teacher—combining my love for education with my passion for the
                arts.
              </p>
              {/* <p>
                I graduated from the University of Dallas in 2019 with a degree
                in Printmaking, and I’ve always been drawn to creative
                expression, especially ceramics and pottery. That belief led me
                to start an after-school art club, where students can explore
                different artistic mediums and bring their ideas to life in a
                supportive environment.
              </p> */}
              <p className="lead">
                Family, teaching, and creativity are at the heart of everything
                I do, and I can’t wait to bring that same energy into the art
                classroom next year.
              </p>

              {/* <div className="buttons">
                <button className="btn">My Classroom Wishlist!</button>
                <button className="btn">Contact Me!</button>
                <button className="btn">Educational Resources</button>
              </div> */}
            </div>
          </div>

          {/* Right Side: Images */}
          <div className="col-md-6 offset-md-1 order-1 order-md-2">
            <div className="image-gallery">
              <img className="img-fluid rounded-3" src={image1} alt="London Bridge Selfie" />
              <img className="img-fluid rounded-3" src={image2} alt="Beach Selfie" />
              <img className="img-fluid rounded-3" src={image3} alt="Family in UK" />
              <img className="img-fluid rounded-3" src={image4} alt="Family Selfie" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
