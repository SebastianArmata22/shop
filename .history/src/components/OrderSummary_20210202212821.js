import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

function OrderSummary(props){
    const ordercontext=useContext(OrderContext)

    return(
        <div className="cart-div">
            <div>
                <div>order

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