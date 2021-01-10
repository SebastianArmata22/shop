import React from 'react'
import './header-style.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import  cart from '../../images/shopping-cart.svg'


function Header(props){
    return(
        <div className="header-container">
            <Link to='/'>
                <a href='#ss' className="header-link"><b>PHONE
                    </b></a>
            </Link>
            <div className='user-card'>
            <img src={cart} height='30px'></img>
            <a href='#dds' className="header-link">Sign up</a>
            </div>
        </div>
    )

}
export default Header