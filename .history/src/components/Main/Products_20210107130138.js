import React from 'react'
import data from "../../data";
import CardProduct from "../CardProduct";

function Products(props){

    const products=data.products
    return(
        <div>
            {products.map(product=><CardProduct item={product}/>)}

        </div>
    )
}
export default Products