import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './products.scss'

export default function Products() {

    const location = useLocation()
    console.log(location)

  return (
    <div className='products'>

        <div className="go-back-button">
            <Link to={{pathname: `${location.state.previousPath}`}}>
                Go Back
            </Link>
        </div>
        
    </div>
  )
}
