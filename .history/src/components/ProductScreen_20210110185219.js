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
                   <div>zdj</div>
                   <div>
                       <h2></h2>
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