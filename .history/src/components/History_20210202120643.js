import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

function History(props){
    const ordercontext=useContext(OrderContext)
    const orders=ordercontext.orders
    const product= orders.map(order=>data.products.find(({_id}) => _id===order.id))
    console(product)

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