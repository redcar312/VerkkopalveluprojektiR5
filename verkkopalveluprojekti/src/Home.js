import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import image1 from './img/black.png'
import './App.css'

export default function Home({ url, category,addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null) {
      const address = url + 'products/allproducts.php/' + category?.id;

      axios.get(address)
        .then((response) => {
          const json = response.data;
          setProducts(json);
        }).catch(error => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        })
    }
  }, [category])

  return (
    <div className='container'>
      <div className='col-12'>
        <h2>Tervetuloa verkkokauppaan!</h2>
        <p className='infoTeksti'>
          Tervetuloa verkkokauppa Verkkokaupan sivustolle, toivottavasti tykkäät
          meidän hyvistä tuotteista!
        </p>
          <div className="col-lg-12 col-md-6 col-3">
            <h3>Tuotteita ryhmästä {category?.name}</h3>
            {products.map(product => (
              <div key={product.id} className="products">

                <Link className="productLink"
                  to={{
                  pathname: '/product',
                  state: {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image
                  }
                  }}
                >
                {product.name}
                </Link>

                <p>{product.price}€</p>
                <Link to={{
                  pathname: '/product',
                  state: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  }
                }}>
                <div>
                  <img className="image-fluid homeImage" src={url + 'img/' + product.image} alt="" />
                </div>
                </Link>
                <button className="btn btn-warning addbutton" type="button" onClick={e => addToCart(product)}>Lisää</button>
              </div>
            ))}
          </div>
        <h3>Alennustuotteita ja tarjouksia:</h3>
        <div className="col-12">
          <div
            id='carouselExampleControls'
            className='carousel slide col-12'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src={image1}
                  height='500px'
                  width='500px'
                  className='d-block w-100 img-responsive'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src={image1}
                  height='500px'
                  width='500px'
                  className='d-block w-100 img-responsive'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src={image1}
                  height='500px'
                  width='500px'
                  className='d-block w-100 img-responsive'
                  alt='...'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
