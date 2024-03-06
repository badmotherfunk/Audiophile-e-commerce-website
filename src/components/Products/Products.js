import React from 'react'
import './products.scss'
import { useLocation } from 'react-router-dom'

export default function Products() {

    const location = useLocation()
    console.log(location)

  return (
    <div>Products</div>
  )
}
