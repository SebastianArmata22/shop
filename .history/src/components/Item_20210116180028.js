import { Divider } from '@material-ui/core'
import React from 'react'
import './componentStyle.css'

function Item(props){
    return(
            <div className='item-container'>
                <div className='img-item'></div>
                <div className='description-item'></div>
            </div>
    )
}
export default Item