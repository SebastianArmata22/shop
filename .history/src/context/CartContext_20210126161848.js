import React, {createContext, useState} from 'react'

export const CartContext=createContext()

function CartContextProvider(props){
    const [numberOfProducts, setNumberOfProducts]=useState(0)

    const changeNumber=()=>{
        setNumberOfProducts(numberOfProducts+1)
    }
    return(
        <CartContext.Provider value={{numberOfProducts, changeNumber}}>
            {props.children}

        </CartContext.Provider>

    )
}
export default CartContextProvider