import React from 'react'
import './home.scss'
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled';
import ButtonTransparent from '../../components/ButtonTransparent/ButtonTransparent';
import Products from '../../components/Products/Products';
import Branding from '../../components/Branding/Branding';

export default function Home() {
  return (
    <>
      <header className='home-header'>

        <div className="hero-container">
          <div className="hero-content">
            <p className='hero-title'>NEW PRODUCT</p>
            <h1 className='hero-product'>XX99 MARK II HEADPHONES</h1>
            <p className='hero-description'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusisast.</p>
            <ButtonFilled />
          </div>
        </div>

        <picture className='hero-picture'>
          <source media="(max-width: 480px)" srcSet={'/starter-code/assets/home/mobile/image-header.jpg'} />
          <source media="(max-width: 1024px)" srcSet={'/starter-code/assets/home/tablet/image-header.jpg'} />
          <img src='/starter-code/assets/home/desktop/image-hero.jpg' alt="mark-two headphones" />
        </picture>

      </header>

      <main>
          <Products />

          <section className='products-section'>
            <div className="main-product">

              <div className="product-main-container">
                <picture className='product-main-picture'>
                  <source media="(max-width: 480px)" srcSet={'/starter-code/assets/home/mobile/image-speaker-zx9.png'} />
                  <source media="(max-width: 1024px)" srcSet={'/starter-code/assets/home/tablet/image-speaker-zx9.png'} />
                  <img src="/starter-code/assets/home/desktop/image-speaker-zx9.png" alt="speaker-zx9" />
                </picture>
                  
                <div className="product-main-content">
                  <div className="product-content">

                    <p className='product-title-main'>ZX9 SPEAKER</p>
                    <p className='product-description-main'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className='button-speaker-main'>
                      SEE PRODUCT
                    </button>
                  </div>
                </div>

              </div>

            </div>

            <div className="secondary-product">
              <div className="secondary-product-container">
                
                <div className="secondary-product-content">
                  <p className='product-title-secondary'>ZX7 SPEAKER</p>
                    <ButtonTransparent />
                </div>
              </div>
            </div>

            <div className="third-product">

              <div className="third-product-picture">
                <picture>
                  <source media="(max-width: 480px)" srcSet={'/starter-code/assets/home/mobile/image-earphones-yx1.jpg'} />
                  <source media="(max-width: 768px)" srcSet={'/starter-code/assets/home/tablet/image-earphones-yx1.jpg'} />
                  <img src={'/starter-code/assets/home/desktop/image-earphones-yx1.jpg'} alt="" />
                </picture>
              </div>

              <div className="third-product-content-container">
                <div className="third-product-content">
                  <p className='third-product-title'>YX1 EARPHONES</p>
                  <ButtonTransparent />
                </div>
              </div>

            </div>          
          </section>
          <section className='branding-section'>
            <Branding />
          </section>
      </main>
    </>
  )
}
