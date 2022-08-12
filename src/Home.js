import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg" alt="Home.js Page error "/>
        </div>

        <div className="home__row">
        <Product 
            id="01"
            title="See U in C by Ali Karim Sayad (Author) "
            price="4999.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
        />

        <Product 
            id="01"
            title="See U in C by Ali Karim Sayad (Author) "
            price="4999.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
        />
        <Product 
            id="01"
            title="See U in C by Ali Karim Sayad (Author) "
            price="4999.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
        />

        </div>

        <div className="home__row">
        <Product 
            id="01"
            title="See U in C by Ali Karim Sayad (Author) "
            price="4999.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
        />
        <Product 
            id="01"
            title="See U in C by Ali Karim Sayad (Author) "
            price="4999.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
        />
        </div>

        <div className="home__row">
        <Product 
            id="01"
            title="See U in C by Ali Karim Sayad (Author) "
            price="4999.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
        />

        <Product 
            id="01"
            title="See U in C by Ali Karim Sayad (Author) "
            price="4999.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
        />
        </div>

    </div>
  )
}

export default Home