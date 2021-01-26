import React, {createContext, useState} from 'react'

export const CartContext=createContext()

function CartContextProvider(props){
    const [numberOfProducts, setNumberOfProducts]=useState(0)
    return(
        <CartContext.Provider value={numberOfProducts}>
            {props.children}

        </CartContext.Provider>

    )
}
export default CartContextProvider