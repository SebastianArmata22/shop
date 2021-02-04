import React from 'react'
import data from "../../data/data";
import CardProduct from "./CardProduct";
import './componentStyle.css'

function Products(props){

    const products=data.products
    return(
        <div className='main-div'>
            <div className="products-container">
                {products.map(product=><CardProduct item={product}/>)}

            </div>
        </div>
    )
}
export default Products