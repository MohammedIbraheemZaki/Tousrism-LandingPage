import React from 'react';
import Poops from '../../../Images/cute.jpg';
import Qoutes from '../../../Images/qoutes.png';
function TravelerCrad (){
  return(
    <div className='traveler__card' >
      <div className="traveler_card-img">
        <img src={Poops} alt=""/>
      </div>
      <h4 className="traveler_card-name">Jimmy dean</h4>
      <p className="traveler_card-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
      </p>
      <div className="qouts">
        <img src={Qoutes} alt="qoute"/>
      </div>
    </div>
  )
}

export default TravelerCrad