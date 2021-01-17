import React from 'react'
import data from '../data'
import './componentStyle.css'
import Item from './Item'

function CardScreen(props){
    const objects = JSON.parse(localStorage.getItem("product") || "[]");
    const products=objects.map(product =>{return data.products.find(({_id}) => _id==product.id)})

    return(
        <div className="cart-div">
            <div className='cart'>
                <div className='list-products-in-cart'>{objects.length===0 ? <p>Cart is empty</p> : products.map(product => <Item props={product} />)}</div>
                <div className='summary-cart'>
                    <h3>Total:</h3>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default CardScreen