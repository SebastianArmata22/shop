import React, {createContext, useState} from 'react'

export const OrderContext=createContext()

function OrderContextProvider(props){
    const [orders, setOrders]=useState([])

    return(
        <OrderContext.Provider value={{orders,setOrders}}>
            {props.children}

        </OrderContext.Provider>

    )
}
export default OrderContextProvider