import { Divider } from '@material-ui/core'
import React from 'react'
import './componentStyle.css'
import trash from '../images/delete.svg'

function Item(props){

    const deleteProduct= (id)=>{
        const objects = JSON.parse(localStorage.getItem("product") || "[]")
        console.log(objects)

        for( var i = 0; i < objects.length; i++){
            if ( objects[i].id === id) {
                objects.splice(i, 1)
            }
        }
        localStorage.setItem("product",JSON.stringify(objects))

    }
    return(
            <div className='item-container'>
                <div className='img-item'>
                    <img src={props.props.photo}></img>
                </div>
                <div className='description-item'>
                    <h3>{props.props.name}</h3>
                    <p>{props.props.price}</p>
                </div>
                <div className='number-products-container'>
                    <img src={trash} alt='trash' onClick={()=>deleteProduct(props.props._id)}></img>
                    <button>-</button>
                    <input type="number"></input>
                    <button>+</button>
                </div>
            </div>
    )
}
export default Item