import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import data from '../../data.json'
import './products.scss'

export default function Products() {

    const location = useLocation()
    console.log(location)

    const newData = data.map((data) => {
        data.previousPath = location.pathname

        return data
    })

    const products = newData.filter((product) => (
        product.name === location.state.name
    ))

    console.log(products)

  return (
    <div className='products'>

        <div className="go-back-button">
            <Link to={{pathname: `${location.state.previousPath}`}}>
                Go Back
            </Link>
        </div>

        {products.map((product, index) => (
            <div className="product-container">
                <h1>{product.name}</h1>
            </div>
        ))}
        
    </div>
  )
}
