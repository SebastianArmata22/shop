import React, {createContext, useState} from 'react'

export const CartContext=createContext()

function CartContextProvider(props){
    const [numberOfProducts, setNumberOfProducts]=useState(0)

    const changeNumber=(value)=>{
        setNumberOfProducts(numberOfProducts+value)
    }
    return(
        <CartContext.Provider value={{...numberOfProducts, change: changeNumber}}>
            {props.children}

        </CartContext.Provider>

    )
}
export default CartContextProvider