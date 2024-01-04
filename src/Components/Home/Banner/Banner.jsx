import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider-image">
              <div className="slider-text">
                <h1 className="slider-heading">Think Different &<br />
                  Do it otherwise
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur<br />
                  adipisicing elit. Delectus, id?</p>
                <button className="slider-button text-center">DISCOVER NOW</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider-image">
              <div className="slider-text">
                <h1 className="slider-heading">Think Different &<br />
                  Do it otherwise
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur<br />
                  adipisicing elit. Delectus, id?</p>
                <button className="slider-button text-center">DISCOVER NOW</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider-image">
              <div className="slider-text">
                <h1 className="slider-heading">Think Different &<br />
                  Do it otherwise
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur<br />
                  adipisicing elit. Delectus, id?</p>
                <button className="slider-button text-center">DISCOVER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
