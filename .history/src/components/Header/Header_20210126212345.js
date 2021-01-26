import React, { useState, useContext} from 'react'
import './header-style.css'
import { Link } from 'react-router-dom';
import  cart from '../../images/shopping-cart.svg'
import { CartContext } from '../../context/CartContext';


function Header(props){
    const context=useContext(CartContext)
    const style={
         textDecoration: 'none',
         color: '#000000'
    }
    return(
        <div className="header-container">
            <Link to='/' style={style}>
                <a href='#ss' className="header-link"><b>PHONE
                    </b></a>
            </Link>

            <div className='user-card'>
                <Link to='/cart'  style={style}>
                    <p>{context.numberOfProducts}</p>
                    <img src={cart} height='30px'></img>
                </Link>
                <Link to='/signin' style={style}>
                <a href='#dds' className="header-link">Sign in</a>
                </Link>
            </div>
        </div>
    )

}
export default Header