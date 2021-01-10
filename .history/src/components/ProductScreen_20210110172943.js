import React from 'react'
import './componentStyle.css'

function ProductScreen(props){
    return(
        <div className='product-screen-contianer'>
               { props.match.params.id}
        </div>
    )
}
export default ProductScreen