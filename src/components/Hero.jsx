import React from "react";

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="container">
        <div className="grid grid-two-col hero-grid">
          <div className="hero-description banner-inner">
            <h1 className="hero-heading">All your Foods in One Location</h1>
            <p className="hero-pera">
              We sell all your most Yamee Burgers, fries,shacks,frepe,icecream
              and many more item in this location. Access them whenever needed,
              share and collaborate with your connections.
            </p>
            <button className="btn btn-darken btn-inline">
              Get Started<i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>

          <div className="banner-img ">
            <img
              className="banner-image"
              src="fa6c0b6e-cba6-48b2-8349-d4ebe7191829.jpg"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
