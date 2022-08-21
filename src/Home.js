import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/GW/ID22/en_2x._CB629411468_.jpg" alt="Home.js Page error "/>
        </div>

        <div className="home__row">
            <Product 
                id="01"
                title="APPLE iPhone 13 Pro Max (Silver, 128 GB)"
                price="1,29,900"
                image="https://m.media-amazon.com/images/I/71zyq-xEdjL._AC_UY327_FMwebp_QL65_.jpg"
            />

            <Product 
                id="02"
                title="AmazonBasics 81 cm (32 inches) HD Ready Smart LED Fire TV AB32E10SS (Black) "
                price="79,900"
                image="https://m.media-amazon.com/images/I/61S+ZtblluL._SX522_.jpg"
            />
            <Product 
                id="03"
                title=" Redmi 139 cm (55 inches) 4K Ultra HD Android Smart LED TV X55 | L55M6-RA (Black)"
                price="39,999"
                image="https://m.media-amazon.com/images/I/71m560rMisL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
            />

        </div>

        <div className="home__row">
            <Product 
                id="01"
                title="APPLE 2022 MacBook AIR M2 - (8 GB/512 GB SSD/Mac OS Monterey) MLXX3HN/A "
                price="1,49,900"
                image="https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/computer/a/b/i/macbook-air-thin-and-light-laptop-apple-original-imagfdf4xnbyyxpa.jpeg?q=70"
            />
            <Product 
                id="02"
                title="OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage) "
                price="71,999"
                image="https://images-eu.ssl-images-amazon.com/images/I/418rmVFVCAL._AC_SX184_.jpg"
            />
        </div>

        <div className="home__row">
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