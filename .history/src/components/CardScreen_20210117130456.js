import React from 'react'
import data from '../data'
import './componentStyle.css'
import Item from './Item'

function CardScreen(props){
    console.log(localStorage.getItem("product"))
    const objects = JSON.parse(localStorage.getItem("product"));
    const product=data.products.find(({_id}) => _id==objects[0].id)
    return(
        <div className="cart-div">
            <div className='cart'>
                <div className='list-products-in-cart'><Item props={product} /></div>
                <div className='summary-cart'>
                    <h3>Total:</h3>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardScreen