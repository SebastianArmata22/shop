
import React, { useEffect, useState } from 'react'
import './componentStyle.css'
import trash from '../images/delete.svg'
import data from '../data'

function Item(props){
    const itemId=props.props.id
    const product= data.products.find(({_id}) => _id===itemId)
    const [visible, setVisible]=useState(true)
    const [value, setValue]=useState(props.props.quantity)
    const context=useContext(CartContext)
    const {changeNumber}= context

    useEffect(()=>{props.parentCallback(value*parseFloat(product.price))},[])

    const deleteProduct= (id)=>{
        const objects = JSON.parse(localStorage.getItem("product") || "[]")
        console.log(objects)

        for( let i = 0; i < objects.length; i++){
            if ( objects[i].id === id) {
                props.parentCallback(-value*parseFloat(product.price))
                objects.splice(i, 1)
                setVisible(false)
                changeNumber(-1)
            }
        }
        localStorage.setItem("product",JSON.stringify(objects))

    }

    const setQuanity= (number, id) =>{
        const objects = JSON.parse(localStorage.getItem("product") || "[]");
        for( let i = 0; i < objects.length; i++){
            if ( objects[i].id === id) {
                if((objects[i].quantity<=99 && number===1) || (number===-1 && objects[i].quantity>1))
                {
                    objects[i].quantity=value+number
                    setValue(objects[i].quantity)
                    props.parentCallback(number*parseFloat(product.price))
                }

            }
        }
        localStorage.setItem("product",JSON.stringify(objects))

    }

    return(
        <div>
            {visible && <div className='item-container'>
                <div className='img-item'>
                    <img src={product.photo} alt='xd'></img>
                </div>
                <div className='description-item'>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
                <div className='number-products-container'>
                    <img src={trash} alt='trash' onClick={()=>deleteProduct(product._id)}></img>
                    <button onClick={()=>setQuanity(-1,product._id)}>-</button>
                    <div >{value}</div>
                    <button onClick={()=>setQuanity(1,product._id)}>+</button>
                </div>
            </div>
    }
     </div>
    )
}
export default Item