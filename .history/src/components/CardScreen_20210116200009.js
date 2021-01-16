import React from 'react'
import data from '../data'
import './componentStyle.css'
import Item from './Item'

function CardScreen(props){
    const objects = JSON.parse(localStorage.getItem("product"));
    console.log(objects.items[0])
    const product=data.products.find(({_id}) => _id===1)
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