import React from 'react'
import products from "../../data";

function Products(props){
    return(
        <div>
            {products.map(data=><h2>{data.name}</h2>)}

        </div>
    )
}
export default Products