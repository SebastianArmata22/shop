import React from 'react'
import data from "../../data";

function Products(props){

    const products=data
    return(
        <div>
            {products.map(product=><h2>{product.name}</h2>)}

        </div>
    )
}
export default Products