import React from 'react'
import './componentStyle.css'

function CardProduct(props){
    return(
        <div className='main-products-div'>
            <div className="prod-container">
                <img src={props.item.photo}></img>
                <h2>{props.item.name}</h2>
                <p>{props.item.price}</p>
            </div>
        </div>
        
    )
}
export default CardProduct