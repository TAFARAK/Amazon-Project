import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function Header() {
  return (
    <div className="header">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=" Logo is not working & upload"/>
        <div className="header__search">
          <input className="header__searchInput" type="text"/>
          {/* material UI */}
          <SearchIcon className='header__SearchIcon'/>
        

        </div>
        <div className="header__nav">
          <div className="header__option">
              <span className="header__optionLineOne">Hello,Sign In  </span>
              <span className="header__optionLineTwo"> Account & Lists</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne"> Your</span>
            <span className="header__optionLineTwo"> Prime</span>

          </div>

        </div>

        <div className='header__ShoppingCartCheckoutIcon'>
          <ShoppingCartCheckoutIcon/>
          <span className="header__optionLineTwo header--BasketCount">0</span>


        </div>
    </div>
  )
}

export default Header
