import React from 'react'
import './home.scss'
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled'

export default function Home() {
  return (
    <header className='home-header'>
      <img src='/starter-code/assets/home/desktop/image-hero.jpg' alt="mark-two headphones" />
      <div className="hero-container">
        <div className="hero-content">
          <p className='hero-title'>NEW PRODUCT</p>
          <h1 className='hero-product'>XX99 MARK II HEADPHONES</h1>
          <p className='hero-description'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusisast.</p>
          <ButtonFilled />
        </div>
      </div>
    </header>
  )
}
