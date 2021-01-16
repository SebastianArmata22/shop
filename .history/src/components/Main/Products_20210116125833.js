import React, { Component } from 'react'
import data from "../../data";
import CardProduct from "../CardProduct";
import '../componentStyle.css'
import { connect } from 'react-redux'

class  Products extends Component{

    render(){
        return(
            <div className='main-products-div'>
                <div className="products-container">
                    {this.props.products.map(product=><CardProduct item={product}/>)}
    
                </div>
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
};
export default connect(mapStateToProps)(Products)