import React, { useState } from "react";

const IMAGE_1_URL =
  "https://images.unsplash.com/photo-1706451822135-e7276f49b06e?q=80&w=3085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_2_URL =
  "https://images.unsplash.com/photo-1699868943805-3a6b9e152366?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_3_URL =
  "https://plus.unsplash.com/premium_photo-1706625683024-71040af27a06?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const Carousel = () => {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          <input
            type="radio"
            name="radio_buttons"
            id="img-1"
            checked={activeImage === 1}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenary 1" src={IMAGE_1_URL} />
            </div>
            <div className="carousel__controls">
              <label
                className="carousel__slide-prev"
                onClick={() => setActiveImage(3)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className="carousel__slide-next"
                onClick={() => setActiveImage(2)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>

          <input
            type="radio"
            name="radio_buttons"
            id="img-2"
            checked={activeImage === 2}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenary 2" src={IMAGE_2_URL} />
            </div>
            <div className="carousel__controls">
              <label
                className="carousel__slide-prev"
                onClick={() => setActiveImage(1)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className="carousel__slide-next"
                onClick={() => setActiveImage(3)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>

          <input
            type="radio"
            name="radio_buttons"
            id="img-3"
            checked={activeImage === 3}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenary 3" src={IMAGE_3_URL} />
            </div>
            <div className="carousel__controls">
              <label
                className="carousel__slide-prev"
                onClick={() => setActiveImage(2)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className="carousel__slide-next"
                onClick={() => setActiveImage(1)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className="carousel__dots">
            <label
              onClick={() => setActiveImage(1)}
              className="carousel__dot"
              id="img-dot-1"
            ></label>
            <label
              onClick={() => setActiveImage(2)}
              className="carousel__dot"
              id="img-dot-2"
            ></label>
            <label
              onClick={() => setActiveImage(3)}
              className="carousel__dot"
              id="img-dot-3"
            ></label>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
