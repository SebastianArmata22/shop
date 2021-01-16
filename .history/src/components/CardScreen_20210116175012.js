import React from 'react'
import data from '../data'
import './componentStyle.css'

function CardScreen(props){
    const product=data.products.find(({_id}) => _id===localStorage.getItem("id"))
    return(
        <div className="cart-div">
            <h2>Cart</h2>
            <div className='cart'>
                <div className='list-products-in-cart'>ggggggdf</div>
                <div className='summary-cart'>ghrgedg</div>
            </div>
        </div>
    )
}

export default CardScreen