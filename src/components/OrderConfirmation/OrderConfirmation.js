import React, { useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import './orderConfirmation.scss'

export default function OrderConfirmation(props) {

    const storage = JSON.parse(localStorage.getItem("cart"))
    const product = storage[0]

    let modalRef = useRef();
    const {confirmationActive, setConfirmationActive, grandPrice} = props
    
    function checkClickOutside(e) {
      if(confirmationActive && modalRef.current?.contains(e.target || e.target.className === "order-confirmation__overlay")) {
        setConfirmationActive(false)
      }
    }
  
    useEffect(() => {
      document.addEventListener('mousedown', checkClickOutside)
    })

    const totalItems = storage.length - 1
    console.log(totalItems)

  return (
    <div className='order-confirmation'>
        <div className="order-confirmation__overlay" ref={modalRef}></div>
        <div className="order-container" >
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
            
            <div className="order-content">
                <h1 className="order-content__title">THANK YOU <br></br> FOR YOUR ORDER</h1>
                <p className="order-content__text">You will receive an email confirmation shortly.</p>
            </div>
            
            <div className="order-summary">

                <div className="order-summary__products">
                    <div className="order-summary__products__container">
                        
                        <div className="order-summary__products__content__container">

                            <img src={product.image} alt={product.name} />
                            <div className="order-summary__products__content">
                                <p className="order-summary__products__content__name">{product.subName}</p>
                                <p className="order-summary__products__content__price">$ {product.price}</p>
                            </div>
                        </div>
                            <p className="order-summary__products__content__quantity">x{product.counter}</p>
                    </div>
                    
                    <div className="summary-border" ></div>
                    <p className='other-items'>And {totalItems} other item(s)</p>
                </div>
                <div className="order-summary__grand">
                    
                    <p className="order-summary__grand__title">GRAND TOTAL</p>
                    <p className="order-summary__grand__price">$ {grandPrice}</p>
                </div>
                
            </div>

            <Link to={'/'}>
                <button className='order-summary__button'>BACK TO HOME</button>
            </Link>
        </div>
    </div>
  )
}
