import React from 'react';
import Slider from "react-slick";
import PackageCard from '../cards/tourPackageCard/tourPackageCard';
// import './packageSlider.css';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "flex", 
        backgroundColor: '#000',
        borderRadius: '50%',
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "flex", 
        backgroundColor: '#000',
        borderRadius: '50%',
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
    </div>
  );
}

function PackageSlider(){
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    arrows: true,
    dots: false,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return(

    <Slider {...settings} className='package__slider' >
      <div>
        <PackageCard/>
      </div>
      <div>
        <PackageCard/>
      </div>
      <div>
        <PackageCard/>
      </div>
      <div>
        <PackageCard/>
      </div>
      <div>
        <PackageCard/>
      </div>
    </Slider>

  )
}

export default PackageSlider;