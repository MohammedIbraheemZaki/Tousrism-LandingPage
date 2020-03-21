import React from 'react';
import tour from '../../../Images/tour_card.jpg';
function TourCard(){
  return(
    <div className='tour__card' >
      <div className="tour_card-box">
        <p>Honeymoon</p> 
      </div>
      <div className="tour_card-img">
        <img src={tour} alt=""/>
      </div>
      <p className="tour_card-text">$299/person</p>
      <p className="tour_card-place">Blue Beauty of Greece</p>
      <p className="tour_card-text">5 Days / 6 Night</p>
    </div>
  )
}

export default TourCard;