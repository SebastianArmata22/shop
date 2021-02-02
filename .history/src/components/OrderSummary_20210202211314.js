import React from 'react'

function OrderSummary(props){
    const ordercontext=useContext(OrderContext)

    retuern(
        <div>
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