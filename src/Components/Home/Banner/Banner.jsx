import React, { useContext, useEffect, useState } from 'react';
import './Banner.css';
import { FirebaseContext } from '../../FirebaseContext/FirebaseContext'
function Banner() {
  const { firebase } = useContext(FirebaseContext);
  const [product, Setproduct] = useState([])

  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const Allpost = snapshot.docs.map((products) => {
        return {
          ...products.data(),
          id: products.id
        }
      })
      Setproduct(Allpost)
    })
  }, [firebase])
  console.log(product)
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

      <div className="container">
        <h2 className='text-center'>Trending Products</h2>
        <p className='text-center'>Check out our latest products below.</p>
        <div className="row">

          {
            product.map((product) => (
              <>
                <div className="col-12 col-md-3 col-lg-3">
                  <div className="card">
                    <img src={product.url} alt="Loding" className='card-image' />
                    <h4>₹{product.price}</h4>
                    <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ducimus?</p>
                    <span className='card-date'>{product.createDate}</span>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </div>

  );
}

export default Banner;
