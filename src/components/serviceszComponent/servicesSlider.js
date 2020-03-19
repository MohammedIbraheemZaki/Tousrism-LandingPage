import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from '../cards/servicesCard/serviceCard';
function Services(){
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
  
    <Slider {...settings} className='services__slider' >
      <div>
        <ServiceCard/>
      </div>
      <div>
        <ServiceCard/>
      </div>
      <div>
        <ServiceCard/>
      </div>
      <div>
        <ServiceCard/>
      </div>
      <div>
        <ServiceCard/>
      </div>
      
      
    </Slider>

  )
}

export default Services;