import React, {createContext, useState} from 'react'

export const OrderContext=createContext()

function OrderContextProvider(props){
    const [orders, setOrders]=useState([])

    const changeOrder=(order)=>{
        setOrders(orders=>[...orders, order])
    }

    return(
        <OrderContext.Provider value={{orders,changeOrder}}>
            {props.children}

        </OrderContext.Provider>

    )
}
export default OrderContextProvider