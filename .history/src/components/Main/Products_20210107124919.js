import React from 'react'
import products from "../../data";

function Products(props){

    const data=products
    return(
        <div>
            <h2>{data.name}</h2>

        </div>
    )
}
export default Products