import React from 'react'
import './home.scss'
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled'
import Products from '../../components/Products/Products'

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
      </main>
    </>
  )
}
