import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className='checkout__left'>
        <img className='checkout__adv' src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/HGT/GW/3000X1200._CB630896464_.jpg" alt="adv" />
        <div>
          <h3 className='checkout__title'>Your Shopping Details</h3>
        </div>
      </div>

      <div className='checkout__right'>
        <div>
          <Subtotal />
        </div>
      </div>

    </div>
  )
}

export default Checkout