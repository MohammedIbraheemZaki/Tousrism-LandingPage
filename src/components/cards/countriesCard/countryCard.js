import React from 'react';
import Country from '../../../Images/country.jpg';
import Arrow from '../../../Images/arrow.png';
function CountryCrad() {
  return(
    <div className='country__card' >
      <img src={Country} alt=""/>
      <div className="country_card-overlay">
        <div className="country_card-content">
          <div className="country_info">
            <p className="country_name">Thailand</p>
            <p className="country_price">$900 - $1900</p>
          </div>
          <div className="country_goto">
            <img src={Arrow} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryCrad;