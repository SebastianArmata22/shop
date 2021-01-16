import React from 'react'

function CardScreen(props){
    return(
        <div>
            <h2>Cart</h2>
            <div>
                <div>{localStorage.getItem("id")}</div>
                <div></div>
            </div>
        </div>
    )
}

export default CardScreen