import React, { useState } from 'react'
import './componentStyle.css'
import Item from './Item'

function CardScreen(props){
    const [products, setProducts]=useState(JSON.parse(localStorage.getItem("product") || "[]"));
    const[finalValue, setFinalValue]=useState(0)

    const handleCallback = (childData) =>{
        setFinalValue(prevFinalValue => prevFinalValue+childData)
    }

    return(
        <div className="cart-div">
            <div className='cart'>
                <div className='list-products-in-cart'>{false ? <p className='empty-cart-info'>Cart is empty</p> : products.map(product => <Item props={product} parentCallback = {handleCallback}/>)}</div>
                <div className='summary-cart'>
                    <div className='total-card'>
                        <h3>Total:</h3>
                        <p>${finalValue.toFixed(2)}</p>
                    </div>

                    <div className='buy-container'>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardScreen