import React from 'react'
import './header-style.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Header(props){
    return(
        <div className="header-container">
            <Link to='/'>
                <a href='#ss' className="header-link">Cheaply.com</a>
            </Link>
            <div className='user-card'>
            <img src='../../images/shopping-cart-empty-side-view.svg'></img>
            <a href='#dds' className="header-link">Sign up</a>
            </div>
        </div>
    )

}
export default Header