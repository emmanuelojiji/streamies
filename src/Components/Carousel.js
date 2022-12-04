import "./Carousel.scss";

import { useEffect, useState } from "react";

import tems from "../media/billboard-img.png";
import black_pink from "../media/blackpink.jpeg";
import jack from "../media/jack.jpg";
import bad_bunny from "../media/bad-bunny.webp";

const Carousel = () => {
  const images = [tems, bad_bunny, black_pink, jack];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} className="image-bg" />
      <img src={images[currentIndex]} className="image-fg" />
    </div>
  );
};

export default Carousel;
