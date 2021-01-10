import React from 'react'
import { Link } from 'react-router-dom'
import './componentStyle.css'

function CardProduct(props){
    return(
       
            <div className="prod-container">
                <Link to={'/product/'+props.item._id}>
                <img src={props.item.photo}></img>
                </Link>
                <h2>{props.item.name}</h2>
                <p>{props.item.price}</p>
            </div>
        
    )
}
export default CardProduct