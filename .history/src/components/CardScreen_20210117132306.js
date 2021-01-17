import React from 'react'
import data from '../data'
import './componentStyle.css'
import Item from './Item'

function CardScreen(props){
    console.log(localStorage.getItem("product"))
    const objects = JSON.parse(localStorage.getItem("product") || "[]");
    console.log(1,objects)
    const products=objects.map(product =>{return product.id
    })
    // const products=data.products.find(({_id}) => _id==objects[1].id)
    return(
        <div className="cart-div">
            <div className='cart'>
                <div className='list-products-in-cart'><Item props={products[0]} /></div>
                <div className='summary-cart'>
                    <h3>Total:</h3>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default CardScreen