import React, { useState, useContext} from 'react'
import './componentStyle.css'
import data from "../../data/data";
import { CartContext } from '../../context/CartContext';
import {NotificationManager} from 'react-notifications'


function ProductScreen(props){
    const numberOfProducts=useContext(CartContext)
    const {changeNumber}= numberOfProducts
    const product=data.products.find(({_id}) => _id===props.match.params.id)
    const [cart, setCart]=useState('Add to cart')

    const isAddedToCart=()=>{
    let items = JSON.parse(localStorage.getItem('product')|| "[]")
    for(let i = 0; i < items.length; i++) {
        if (items[i].id === props.match.params.id) {
            return true
        }
    }
    return false
    }

    const [active, setActive]=useState(isAddedToCart)

    const addToCart=()=>{
        let items = JSON.parse(localStorage.getItem('product')|| "[]")
        let found = false;
        for(let i = 0; i < items.length; i++) {
            if (items[i].id === props.match.params.id) {
                found = true;
                break;
            }
        }
        if(!found){
            let item={
                "id": props.match.params.id,
                "quantity": 1
            }
            items.push(item)
            changeNumber(1)
        }


        localStorage.setItem("product",JSON.stringify(items))
        setCart('Added to cart')
        setActive(true)
        NotificationManager.success('Added to cart')


    }

    return(
        <div className='product-screen-contianer'>
               <div className='photo-price-div'>
                   <div>
                       <img src={product.photo} alt='smartphone'></img>
                   </div>
                   <div className='sale-div'>
                       <h2>{product.name}</h2>
                       <div>
                           <p>${product.price}</p>
                           {active ? <div>Added to cart</div> : <button onClick={addToCart} >{cart}</button>}
                       </div>
                   </div>
               </div>
               <div className='description'>
                   <p>{product.description}</p>
               </div>
               <div className='technical-data-div'>
                   <h3>Technical data:</h3>
                   <table >
                       <tr className='even-row'>
                           <td>Display</td>
                           <td>{product.display}</td>
                       </tr>
                       <tr >
                           <td>Memory</td>
                           <td>{product.memory}</td>
                       </tr>
                       <tr className='even-row'>
                           <td>Camera</td>
                           <td>{product.camera}</td>
                       </tr>
                       <tr>
                           <td>Battery</td>
                           <td>{product.battery}</td>
                       </tr>
                       <tr className='even-row'>
                           <td>Selfie camera</td>
                           <td>{product.selfieCamera}</td>
                       </tr>
                   </table>
               </div>
        </div>
    )
}
export default ProductScreen