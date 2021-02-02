import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import data from '../data'

function History(props){
    const ordercontext=useContext(OrderContext)
    const orders=ordercontext.orders
    const products= orders.map(order=>data.products.find(({_id}) => _id===order.id))
    let price=0
    for(let i=0; i<products.length; i++ ){
        price+=parseFloat(products[i].price)
    }
    const getRandomIntInclusive=()=> {
        return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
      }
    return(
        <div>
            <h1>History</h1>
            <div>
                {orders.map(order=><div>
                    <div>{getRandomIntInclusive}</div>
                    <div>{price}</div>
                    <div>Active</div>
                </div>)}

            </div>
        </div>
    )
}
export default History