import { Divider } from '@material-ui/core'
import React from 'react'
import './componentStyle.css'

function Item(props){
    console.log(props)
    return(
            <div className='item-container'>
                <div className='img-item'>
                    <img src={props.photo}></img>
                </div>
                <div className='description-item'></div>
            </div>
    )
}
export default Item