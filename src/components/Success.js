import React from 'react';
import video1 from '../assert/video1.mp4';

const Success = () => (
  <div>
    <div className="programs-container">
      <div className="success-rate">
        <p>We have 98% success rate!</p>
        <p>People who follow even 80% of our program have a 98% success rate.</p>
      </div>
      </div>
      <div className="video-container">
    <video className="responsive-video" controls>
      <source src={video1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  </div>
);

export default Success;


