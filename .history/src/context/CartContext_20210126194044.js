import React, {createContext, useState} from 'react'

export const CartContext=createContext()

function CartContextProvider(props){
    const numberOfProducts=useContext(CartContext)
    const {changeNumber}= numberOfProducts

    const changeNumber=(value)=>{
        setNumberOfProducts(numberOfProducts+value)
    }
    return(
        <CartContext.Provider value={{numberOfProducts, changeNumber}}>
            {props.children}

        </CartContext.Provider>

    )
}
export default CartContextProvider