import React from 'react'
import './componentStyle.css'
import data from "../data";

function ProductScreen(props){
   const product=data.products.find(({_id}) => _id===props.match.params.id)
   console.log(product.name)
   console.log(product)
    return(
        <div className='product-screen-contianer'>
               { props.match.params.id}
               <div>
                   <div>
                       <img src={product.photo} alt='photo'></img>
                   </div>
                   <div>
                       <h2>{product.name}</h2>
                       <div></div>
                   </div>
               </div>
               <div>
                   opis
               </div>
        </div>
    )
}
export default ProductScreen