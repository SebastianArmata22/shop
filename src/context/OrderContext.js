import React, {createContext, useState} from 'react'

export const OrderContext=createContext()

function OrderContextProvider(props){

    return(
        <OrderContext.Provider value={}>
            {props.children}

        </OrderContext.Provider>

    )
}
export default OrderContextProvider