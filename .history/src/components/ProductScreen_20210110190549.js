import React from 'react'
import './componentStyle.css'
import data from "../data";

function ProductScreen(props){
   const product=data.products.find(({_id}) => _id===props.match.params.id)
   console.log(product.name)
   console.log(product)
    return(
        <div className='product-screen-contianer'>
               <div className='photo-price-div'>
                   <div>
                       <img src={product.photo} alt='photo'></img>
                   </div>
                   <div className='sale-div'>
                       <h2>{product.name}</h2>
                       <div>
                           <p>{product.price}</p>
                           <button>Buy</button>
                       </div>
                   </div>
               </div>
               <div>
                   opis
               </div>
        </div>
    )
}
export default ProductScreen