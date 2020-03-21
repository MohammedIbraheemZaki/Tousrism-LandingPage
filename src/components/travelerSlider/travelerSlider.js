import React from 'react';
import Slider from "react-slick";
import TravelerCard from '../cards/travelerCard/travelerCrad';

function PackageSlider(){
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    arrows: false,
    dots: false,
    autoplay: true,
    
  };
  return(

    <Slider {...settings} className='traveler__slider' >
      <div>
        <TravelerCard/>
      </div>
      <div>
        <TravelerCard/>
      </div>
      <div>
        <TravelerCard/>
      </div>
      <div>
        <TravelerCard/>
      </div>
      <div>
        <TravelerCard/>
      </div>
    </Slider>

  )
}

export default PackageSlider;