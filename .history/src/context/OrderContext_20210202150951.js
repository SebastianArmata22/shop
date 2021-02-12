import React, {createContext, useState} from 'react'

export const OrderContext=createContext()

function OrderContextProvider(props){
    const [orders, setOrders]=useState([])
    const [deliveryAdress, setDeliveryAdress]=useState(null)
    const [paymentMethod, setPaymentMethod]=useState(null)

    const changeOrder=(order)=>{
        setOrders(orders=>[...orders, order])
    }
    const changeDeliveryAdress=(adress)=>{
        setDeliveryAdress(adress)
    }
    const changePaymentMethod=(payment)=>{
        setPaymentMethod(payment)
    }

    return(
        <OrderContext.Provider value={{orders,changeOrder,deliveryAdress,changeDeliveryAdress,paymentMethod,changePaymentMethod}}>
            {props.children}

        </OrderContext.Provider>

    )
}
export default OrderContextProvider