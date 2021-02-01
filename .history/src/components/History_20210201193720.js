import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

function History(props){
    const ordercontext=useContext(OrderContext)
    const {orders}=ordercontext

    return(
        <div>
            <h1>History</h1>
            <div>
                {orders.map(order=><div>

                </div>)}

            </div>
        </div>
    )
}
export default History