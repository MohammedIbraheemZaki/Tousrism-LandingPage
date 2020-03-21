import React from 'react';
import Star from '../../../Images/star.png';

function AcchivedCard() {
  return(
    <div className='acchived__card' >
      <div className="acchived_card-img">
        <img src={Star} alt=""/>
      </div>
      <h5 className="acchived_card-num">120,859</h5>
      <p className="acchived_card-discreption">HAPPY TRAVELLERS</p>
    </div>
  )
}

export default AcchivedCard;