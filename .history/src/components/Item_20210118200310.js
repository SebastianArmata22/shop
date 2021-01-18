import { Divider } from '@material-ui/core'
import React, { useState } from 'react'
import './componentStyle.css'
import trash from '../images/delete.svg'
import data from '../data'

function Item(props){
    const itemId=props.props.id
    const product= data.products.find(({_id}) => _id==itemId)
    /* const [visible, setVisible]=useState(true)
    const [value, setValue]=useState(1)
    const deleteProduct= (id)=>{
        const objects = JSON.parse(localStorage.getItem("product") || "[]")
        console.log(objects)

        for( let i = 0; i < objects.length; i++){
            if ( objects[i].id === id) {
                objects.splice(i, 1)
                setVisible(false)
            }
        }
        localStorage.setItem("product",JSON.stringify(objects))

    }
    const setQuanity= (value, id) =>{
        const objects = JSON.parse(localStorage.getItem("product") || "[]");
        for( let i = 0; i < objects.length; i++){
            if ( objects[i].id === id) {
                objects[i].quantity=objects[i].quantity+value
                setValue(objects[i].quantity)
                return objects[i].quantity
            }
        }
        localStorage.setItem("product",JSON.stringify(objects))

    }
    */
    return(
        <div>
            {visible && <div className='item-container'>
                <div className='img-item'>
                    <img src={product.photo}></img>
                </div>
                <div className='description-item'>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
                <div className='number-products-container'>
                    <img src={trash} alt='trash' onClick={()=>deleteProduct(product._id)}></img>
                    <button onClick={()=>setQuanity(-1,product._id)}>-</button>
                    <input type="number" value={value}></input>
                    <button onClick={()=>setQuanity(1,product._id)}>+</button>
                </div>
            </div>
    }
     </div>
    )
}
export default Item