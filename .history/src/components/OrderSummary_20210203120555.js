import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import data from '../data'
import gpay from '../images/gpay.jpg'
import paypal from '../images/paypal.jpg'
import cod from '../images/cod.png'

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
                    <div className='product-in-order'>
                        <div>Name</div>
                        <div>Price</div>
                        <div>Quantity</div>
                    </div>
                    {order.map(product=><div className='product-in-order'>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>{product.quantity}</div>
                    </div>)}
                </div>
                <div>
                    <div>
                        <h3>Delivery address</h3>
                        <p>{ordercontext.deliveryAdress.adress}</p>
                        <p>{ordercontext.deliveryAdress.zip}</p>
                        <p>{ordercontext.deliveryAdress.city}</p>
                    </div>
                    <div>
                        <h3>Payment method</h3>
                        <img src={ordercontext.paymentMethod===1 && gpay || ordercontext.paymentMethod===2 && paypal ||
                            ordercontext.paymentMethod===3 && cod}></img>
                        <p>Status: paid</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default OrderSummary