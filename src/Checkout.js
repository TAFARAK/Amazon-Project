import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className='checkout__left'>
        <img className='checkout__adv' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/ID22/Headers/Celebrating-Good-health-1500x400.jpg" alt="adv" />
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