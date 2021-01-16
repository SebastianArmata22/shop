import React, { Component } from 'react'
import data from "../../data";
import CardProduct from "../CardProduct";
import '../componentStyle.css'
import { connect } from 'react-redux'
import ProductScreen from '../ProductScreen';
import {addToCart} from '../../actions/cartActions'

class  Products extends Component{

    addToCart = (product) => {
        this.props.addToCart(product);
    }
    render(){
        return(
            <div className='main-products-div'>
                <div className="products-container">
                    {this.props.products.map(product=><CardProduct item={product} addToCart={this.addToCart} 
                    inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id}/>)}
                </div>
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        cart: state.cart.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)