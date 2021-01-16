import { Divider } from '@material-ui/core'
import React from 'react'
import './componentStyle.css'

function Item(props){
    console.log(props)
    return(
            <div className='item-container'>
                <div className='img-item'>
                    <img src={props.props.photo}></img>
                </div>
                <div className='description-item'>
                    <h3>{props.props.name}</h3>
                    <p>{props.props.price}</p>
                </div>
            </div>
    )
}
export default Item