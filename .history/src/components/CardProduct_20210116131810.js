import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './componentStyle.css'

class CardProduct extends Component{

    state={
        inCart: this.props.inCart
    }

    addToCart = (e) => {
        e.preventDefault();
        this.props.addToCart(this.props.product)
        this.setState({
            inCart: true
        })
    }
    render(){
        return(
            <div className="prod-container" >
                <Link to={'/product/'+this.props.item._id} style={{ textDecoration: 'none', color: '#000000' }}>
                <img src={this.props.item.photo}></img>
                <h2>{this.props.item.name}</h2>
                </Link>
                <p>{this.props.item.price}</p>
                <div className="bottom-wrap">
                        {
                            this.state.inCart?(
                                <span className="btn btn-success">Added to cart</span>
                            ) : (
                                <a href="#" onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Add to cart</a>
                            )
                        }
                        </div>
            </div>
    )
    }
    
}
export default CardProduct