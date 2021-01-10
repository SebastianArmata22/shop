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
                           <button>Add to cart</button>
                       </div>
                   </div>
               </div>
               <div className='description'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                 remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                   software like Aldus PageMaker including versions of Lorem Ipsum.
               </div>
        </div>
    )
}
export default ProductScreen