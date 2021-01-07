import React from 'react'

function CardProduct(props){
    return(
        <div>
            <img src={props.item.photo}></img>
            <h2>{props.item.name}</h2>
        </div>
    )
}
export default CardProduct