import React from 'react';
import './serviceCard.css';
import serviceCard from '../../../Images/serviceCard.jpg';
function ServiceCard(){
  return(
    <div className='service__card'>
      <div className="service_card-img">
        <img src={serviceCard} alt=""/>
      </div>
      <h3 className="service_card-header">FLIGHT BOOKING</h3>
      <p className="service_card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
    </div>
  )
}

export default ServiceCard;