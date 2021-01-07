import React from 'react'
import products from "../../data";

function Products(props){

    const datas=products
    return(
        <div>
            {datas.map(data=><h2>{data.name}</h2>)}

        </div>
    )
}
export default Products