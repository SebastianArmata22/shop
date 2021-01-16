import React from 'react'
import data from '../data'
import './componentStyle.css'
import Item from './Item'

function CardScreen(props){
    const product=data.products.find(({_id}) => _id===localStorage.getItem("id"))
    return(
        <div className="cart-div">
            <div className='cart'>
                <div className='list-products-in-cart'><Item props={product} /></div>
                <div className='summary-cart'>ghrgedg</div>
            </div>
        </div>
    )
}

export default CardScreen