import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

const App = () => {
  return (
    <Carousel autoPlay={true} interval={1000} infiniteLoop={true}  >
      <div>
        <img src="images/4k.jpg" alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="images/4k1.jpg" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="images/big.jpg" alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
};

export default App;
