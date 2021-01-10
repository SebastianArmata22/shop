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
            <a href='#dd' className="header-link">Cart</a>
            <a href='#dds' className="header-link">Sign up</a>
            </div>
        </div>
    )

}
export default Header