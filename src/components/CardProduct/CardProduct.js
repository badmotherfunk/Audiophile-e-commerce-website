import React from 'react'
import './cardProduct.scss'
import ButtonFilled from '../ButtonFilled/ButtonFilled'
import { useLocation } from 'react-router-dom'

export default function CardProduct({props, id}) {

    const location = useLocation()

    console.log(location)

    const headphone = props

  return (
    <div className={location.pathname === "/speakers" ? "card-speaker" : "card"} id={id}>
        <picture className="card__picture">
            <source media="(max-width: 480px)" srcSet={headphone.categoryImage.mobile} />
            <source media="(max-width: 768px)" srcSet={headphone.categoryImage.tablet} />
            <img src={headphone.categoryImage.desktop} alt={headphone.name} />
        </picture>

        <div className="headphones-description-container">
            {headphone.new &&
                <p className="new-product">NEW PRODUCT</p>
            }
            <div className="headphones-description-content">
                <h3 className="headphones-title">{headphone.name}</h3>
                <p className="headphones-description">{headphone.description}</p>
                <ButtonFilled />
            </div>
        </div>
    </div>
  )
}
