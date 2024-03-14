import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrderConfirmation from '../../components/OrderConfirmation/OrderConfirmation'
import './checkout.scss'

export default function Checkout() {

    useEffect(() => {
        document.title = "Audiophile - Checkout"
    }, [])

    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [vatPrice, setVatPrice] = useState([])
    const [confirmationActive, setConfirmationActive] = useState(false)
    
    // Filtre les produits du panier >= 1
    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("cart"))
        setProducts(product =>
            storage.filter((item) => item.counter >= 1)
            )
    }, [])

    // Prévient le comportement par défaut si le panier est vide
    useEffect(() => {
        if(localStorage.length === 0) {
            navigate('/')
        }
    })

    const handleGoBack = () => {
        navigate(- 1)
    }

    const [isChecked, setIsChecked] = useState('option-1')

    // Gère l'état pour attribuer une valeur au bouton radio coché
    const handleOptionChange = (e) => {
        if(e.target.checked) {
            setIsChecked(e.target.value)
        }
    }

    // Calcul du prix total du panier
    const price = products.map((item) => {
        let itemPrice = item.price * item.counter
    
        return itemPrice
    })
        
    const total = price.reduce(
        (acc, product) => acc + product, 0
    )

    // Calcul de la TVA inclue dans le prix
    useEffect(() => {
        let price = total * 1.20
        const subPrice = price - total
        
        const subTotal = Math.floor(subPrice)
        
        setVatPrice(subTotal)
    }, [total])

    // Calcul du prix avec TVA (arrondi) + livraison
    const grandPrice = Math.round(total) + 50

    const handlePayment = (e) => {
        e.preventDefault()
        setTimeout(() => {
            setConfirmationActive(true)           
        }, 500);
    }


  return (
    <div className='checkout'>

        <div className="go-back-button">
            <button onClick={handleGoBack}>
                Go Back
            </button>
        </div>

        <div className="checkout-container">

            <form className="checkout-form"  id='checkout-form' onSubmit={handlePayment}>

                <h1 className='checkout-title'>CHECKOUT</h1>
                <div className="checkout-billing">
                    <p className='checkout-subtitle'>BILLING DETAILS</p>

                    <div className="checkout-billing-input">

                        <div className="checkout-input-left">
                            <div className='checkout-input'>
                                <label htmlFor="name">Name</label>
                                <input type="text" id='name' placeholder='Alexei Ward' maxLength="50" required />
                            </div>

                            <div className='checkout-input'>
                                <label htmlFor="tel">Phone Number</label>
                                <input type="tel" id='tel' placeholder='+1 202-555-0136' maxLength="15" required />
                            </div>
                        </div>
                    
                        <div className="checkout-input-right">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id='email' placeholder='alexei@mail.com' maxLength="50" required />
                        </div>
                    </div>
                </div>

                <div className="checkout-shipping">
                    <p className='checkout-subtitle'>SHIPPING INFO</p>

                    <div className='checkout-input'>
                        <label htmlFor="adress">Address</label>
                        <input type="text" id='adress' placeholder='1137 Williams Avenue' maxLength="50" required />
                    </div>

                    <div className="checkout-shipping-info">
                        
                        <div className="checkout-input-left">
                            <div className='checkout-input'>
                                <label htmlFor="zip">ZIP Code</label>
                                <input type="text" id='zip' placeholder='10001' maxLength="5" required />
                            </div>

                            <div className='checkout-input'>
                                <label htmlFor="country">Country</label>
                                <input type="country" id='country' placeholder='United States' maxLength="25" required />
                            </div>
                        </div>
                    
                        <div className="checkout-input-right">
                            <label htmlFor="city">City</label>
                            <input type="text" id='city' placeholder='New York' maxLength="25" required />
                        </div>

                    </div>
                </div>

                <div className="checkout-payment">

                    <p className="checkout-subtitle">PAYMENT DETAILS</p>

                    <div className="payment-method">

                        <div className="payment-text">
                            <p>Payment Method</p>
                        </div>

                        <div className="payment-method-input">
                        
                            <div className="e-money">
                                <input type="radio" id='e-money' name='payment-method' value="option-1" onChange={handleOptionChange} defaultChecked />
                                <label htmlFor="e-money">e-Money</label>
                            </div>

                            <div className="cash-delivery">
                                <input type="radio" id='cash-delivery' name='payment-method' value="option-2" onChange={handleOptionChange}/>
                                <label htmlFor="cash-delivery">Cash on Delivery</label>
                            </div>
                        </div>

                    </div>

                    {isChecked === "option-1" && 
                 
                        <div className="payment-method-information">
                            <div className="checkout-input">
                                <label htmlFor="number">e-Money Number</label>
                                <input type="text" id='number' placeholder='238521993' maxLength="9" required />
                            </div>
                            
                            <div className="checkout-input">
                                <label htmlFor="number">e-Money PIN</label>
                                <input type="text" id='number' placeholder='6891' maxLength="4" required />
                            </div>
                        </div>
                    }

                    {isChecked === "option-2" &&

                        <div className="cash-delivery-information">
                            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z" fill="#D87D4A"/></svg>
                            <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                        </div>

                    }

                </div>

            </form>

            <div className="checkout-summary">
                <div className="summary-content">
                    <h2 className='summary-title'>SUMMARY</h2>

                    <div className="summary-list">

                        { products.map((product, index) => (

                         <Link key={index} to={{pathname: `/${product.category}/products/${product.name}`}} state={product}>
                            <div className="summary-items">

                                <img src={product.image} alt={product.name} />

                                <div className="summary-item-content">
                                    <div className="summary-item-information">
                                        <p className='summary-item-title'>{product.subName}</p>
                                        <p className='summary-item-price'>$ {product.price}</p>
                                    </div>

                                    <div className="summary-item-quantity">
                                        <p>x{product.counter}</p>
                                    </div>
                                </div>

                            </div>
                         </Link>

                        ))}
                    </div>

                    <div className="summary-payment-information">
                        <div className="summary-total">
                            <p className='summary-total-title'>TOTAL</p>
                            <p className='summary-total-sum'>$ {total}</p>
                        </div>

                        <div className="summary-total">
                            <p className='summary-total-title'>SHIPPING</p>
                            <p className='summary-total-sum'>$ 50</p>
                        </div>

                        <div className="summary-total">
                            <p className='summary-total-title'>VAT (INCLUDED)</p>
                            <p className='summary-total-sum'>$ {vatPrice}</p>
                        </div>

                        <div className="summary-total">
                            <p className='summary-total-title'>GRAND TOTAL</p>
                            <p className='summary-grand-total-sum'>$ {grandPrice}</p>
                        </div>
                    </div>

                    <button type='submit' form='checkout-form' className="payment-button" >CONTINUE & PAY</button>

                </div>
            </div>

        </div>

        {confirmationActive &&
            <OrderConfirmation grandPrice={grandPrice} confirmationActive={confirmationActive}/>
        }
    </div>
  )
}
