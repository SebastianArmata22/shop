import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import data from '../data'

function OrderSummary(props){
    const ordercontext=useContext(OrderContext)
    const order=[]
    console.log(ordercontext.orders)
    for(let i=0; i<ordercontext.orders.length;i++){
        order.push(data.products.find(({_id}) => _id===ordercontext.orders[i].id))
        order[i].quantity=ordercontext.orders[i].quantity

    }
    console.log(order)

    return(
        <div className='main-div'>
            <div className='products-container'>
                <div>
                    {order.map(product=><div>
                        <div>Name: {product.name}</div>
                        <div>Price: {product.price}</div>
                        <div>Quantity: {product.quantity}</div>
                    </div>)}
                </div>
                <div>
                    <div>delivery adress</div>
                    <div>{ordercontext.paymentMethod}</div>

                </div>
            </div>

        </div>
    )
}
export default OrderSummary