import "./Carousel.scss";

import { useState } from "react";

import tems from "../media/billboard-img.png";
import black_pink from "../media/blackpink.jpeg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(black_pink);

  return (
    <div className="carousel-container">
      <img src={currentImage} className="image-bg" />
      <img src={currentImage} className="image-fg" />
    </div>
  );
};

export default Carousel;
