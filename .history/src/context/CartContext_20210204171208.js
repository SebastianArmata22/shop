import React, {createContext, useState} from 'react'

export const CartContext=createContext()

function CartContextProvider(props){
    const products=JSON.parse(localStorage.getItem("product") || "[]")
    const [numberOfProducts, setNumberOfProducts]=useState(products.length)

    const changeNumber=(value)=>{
        setNumberOfProducts(value===null? 0 : numberOfProducts+value)
    }
    return(
        <CartContext.Provider value={{numberOfProducts, changeNumber}}>
            {props.children}

        </CartContext.Provider>

    )
}
export default CartContextProvider