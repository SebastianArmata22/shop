import React from 'react'
import { Link } from 'react-router-dom'
import './componentStyle.css'

function CardProduct(props){
    return(
            <div className="prod-container" >
                <Link to={'/product/'+props.item._id} style={{ textDecoration: 'none', color: '#000000' }}>
                <img src={props.item.photo} alt='smartphone'></img>
                <h2>{props.item.name}</h2>
                </Link>
                <p>${props.item.price}</p>
            </div>
    )
}
export default CardProduct