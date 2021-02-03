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
                <div className='product-in-order'>
                    <div className='product-in-order'>
                        <div className='column-33'>Name</div>
                        <div className='column-33'>Price</div>
                        <div className='column-33'>Quantity</div>
                    </div>
                    {order.map(product=><div className='product-in-order'>
                        <div className='column-33'>{product.name}</div>
                        <div className='column-33'>{product.price}</div>
                        <div className='column-33'>{product.quantity}</div>
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
                            ordercontext.paymentMethod===3 && cod} height='70rem'></img>
                        <p>Status: paid</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default OrderSummary