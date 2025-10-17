import React from 'react';
import './HeaderSlider.css';

const HeaderSlider = ({ text }) => {
  return (
    <div className="header-slider">
      <div className="header-slider__text">{text}</div>
    </div>
  );
};

export default HeaderSlider;
