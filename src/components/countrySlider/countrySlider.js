import React from 'react';
import Slider from "react-slick";
import CountryCard from '../cards/countriesCard/countryCard';

function PackageSlider(){
  const settings = {
    // className: "center",
    infinite: true,
    slidesToShow: 4,
    speed: 1000,
    arrows: false,
    dots: false,
    autoplay: false,
    
  };
  return(

    <Slider {...settings} className='Country__slider' >
      <div>
        <CountryCard/>
      </div>
      <div>
        <CountryCard/>
      </div>
      <div>
        <CountryCard/>
      </div>
      <div>
        <CountryCard/>
      </div>
      <div>
        <CountryCard/>
      </div>
    </Slider>

  )
}

export default PackageSlider;