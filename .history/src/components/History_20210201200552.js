import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

function History(props){
    const ordercontext=useContext(OrderContext)
    const orderList=ordercontext.orders
    const orders= [...orderList]
    console.log9orders

    return(
        <div>
            <h1>History</h1>
            <div>
                {orders.map(order=><div>
                    <div>Id</div>
                    <div>Price</div>
                    <div>Status</div>
                </div>)}

            </div>
        </div>
    )
}
export default History