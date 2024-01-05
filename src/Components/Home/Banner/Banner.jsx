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

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <div className="list-item-1">
              <div className="list-title">
                <h3>Sunflower Clock</h3>
                <h3>Quartz Hands</h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="list-item-2">
              <div className="list-title">
                <h3>Chair kimi No Isu</h3>
                <h3>Project</h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="list-item-3">
              <div className="list-title">
                <h3>Sweeper and Dustpan</h3>
                <h3>by Jan Kochanski</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
