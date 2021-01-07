import React from 'react'
import data from "../../data";
import CardProduct from "../CardProduct";

function Products(props){

    const productsArray=data
    return(
        <div>
            {productsArray.map(product=><CardProduct item={product}/>)}

        </div>
    )
}
export default Products