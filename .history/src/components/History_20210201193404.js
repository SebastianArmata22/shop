import React, { useContext } from 'react'

function History(props){
    const orderContext=useContext(orderContext)
    const {orders}=orderContext

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