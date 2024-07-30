import React from 'react';
import './HomePage.css';
import img9 from '../assert/img9.jpg'
import img10 from '../assert/img10.jpg'
import img11 from '../assert/img11.jpg'
import img12 from '../assert/img12.jpg'
import img2 from '../assert/img2.jpg'
import img3 from '../assert/img3.jpg'
import img5 from '../assert/img5.jpg'
import img6 from '../assert/img6.jpg'
import img7 from '../assert/img7.jpg'
import img8 from '../assert/img8.jpg'
import img13 from '../assert/img13.jpg'
import img14 from '../assert/img14.jpg'
import img15 from '../assert/img15.jpg'
import img16 from '../assert/img16.jpg'
import img17 from '../assert/img17.jpg'
import firstimg from '../assert/firstimg.png';


const Home = () => (
  <div className="home-container">
    <img src={firstimg} width='1100px' height='500px' alt='img'></img>
    <br /><br />
    <p>Welcome to Extreme Wellness Studio, your ultimate destination for health and wellness.
      Our state-of-the-art facilities and expert trainers are dedicated to helping you achieve your
      fitness goals, whether you're a beginner or a seasoned athlete. With a variety of classes,
      personalized training programs, and the latest in fitness technology, we provide an inclusive
      environment where everyone can thrive.Join us today and embark on a journey to a healthier,
      happier you!</p>
    <br />
    <div className="banner-container">
      <p> Our <span>100+</span> Happy Customers! </p>
    </div>
    <div className="image-container">
      <img src={img9} alt="view9" className="image-item" />
      <img src={img10} alt="view10" className="image-item" />
      <img src={img11} alt="view11" className="image-item" />
      <img src={img12} alt="view12" className="image-item" />
      <img src={img2} alt="view2" className="image-item" />
      <img src={img3} alt="view3" className="image-item" />
      <img src={img5} alt="view5" className="image-item" />
      <img src={img6} alt="view6" className="image-item" />
      <img src={img7} alt="view7" className="image-item" />
      <img src={img8} alt="view8" className="image-item" />
      <img src={img13} alt="view13" className="image-item" />
      <img src={img14} alt="view14" className="image-item" />
      <img src={img15} alt="view15" className="image-item" />
      <img src={img16} alt="view16" className="image-item" />
      <img src={img17} alt="view17" className="image-item" />

    </div>
  </div>
);

export default Home;
