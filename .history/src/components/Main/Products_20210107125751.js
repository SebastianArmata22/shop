import React from 'react'
import data from "../../data";

function Products(props){

    const products=data
    return(
        <div>
            {products.map(product=><CardProduct item={product}/>)}

        </div>
    )
}
export default Products