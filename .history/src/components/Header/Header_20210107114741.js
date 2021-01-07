import React from 'react'
import './header-style.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Header(props){
    return(
        <div className="header-container">
            <a href='#ss' className="header-link">Cheaply.com</a>
            <div className='user-card'>
            <a href='#dd' className="header-link">Cart</a>
            <a href='#dds' className="header-link">Sign up</a>
            </div>
        </div>
    )

}
export default Header