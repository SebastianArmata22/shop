import React from 'react'
import data from '../data'
import './componentStyle.css'

function CardScreen(props){
    const product=data.products.find(({_id}) => _id===localStorage.getItem("id"))
    return(
        <div className="cart-div">
            <h2>Cart</h2>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default CardScreen