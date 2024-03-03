import React from 'react'
import './home.scss'
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled';
// import ButtonTransparent from '../../components/ButtonTransparent/ButtonTransparent';
import Products from '../../components/Products/Products';

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
          <source media="(max-width: 480px)" srcset={'/starter-code/assets/home/mobile/image-header.jpg'} />
          <source media="(max-width: 1024px)" srcset={'/starter-code/assets/home/tablet/image-header.jpg'} />
          <img src='/starter-code/assets/home/desktop/image-hero.jpg' alt="mark-two headphones" />
        </picture>

      </header>

      <main>
          <Products />

          <section className='products-section'>
            <div className="main-product">

              <svg className='main-product-svg' width="944" height="944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg>

              <div className="products-main-container">
                <picture className='product-main-picture'>
                  <source media="(max-width: 480px)" srcset={'/starter-code/assets/home/mobile/image-speaker-zx9.png'} />
                  <source media="(max-width: 1024px)" srcset={'/starter-code/assets/home/tablet/image-speaker-zx9.png'} />
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
          </section>
      </main>
    </>
  )
}
