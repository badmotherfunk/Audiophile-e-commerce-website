import React from 'react'
import { Link } from 'react-router-dom'
import './products.scss'

export default function Products() {
  return (
    <section className='section-products'>
        
        <div className='products'>
            <Link className="products__layout" to={'/headphones'}>

                <picture className='products__picture'>
                    <img src="/starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="" />
                </picture>

                <div className="products__content">
                    <p className='products__title'>HEADPHONES</p>
                    <div className="products__shop">
                        <p>SHOP</p>
                        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none"/></svg>
                    </div>
                </div>
                
            </Link>
            <Link className="products__layout" to={'/speakers'}>

                <picture className='products__picture'>
                    <img src="/starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="" />
                </picture>

                <div className="products__content">
                    <p className='products__title'>SPEAKERS</p>
                    <div className="products__shop">
                        <p>SHOP</p>
                        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none"/></svg>
                    </div>
                </div>
                
            </Link>

            <Link className="products__layout" to={'/earphones'}>

                <picture className='products__picture'>
                    <img src="/starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="" />
                </picture>

                <div className="products__content">
                    <p className='products__title'>EARPHONES</p>
                    <div className="products__shop">
                        <p>SHOP</p>
                        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none"/></svg>
                    </div>
                </div>
                
            </Link>

        </div>

    </section>
  )
}
