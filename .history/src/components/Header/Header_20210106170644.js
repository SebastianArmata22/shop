import React from 'react'
import './header-style.css'


function Header(props){
    return(
        <div className="header-container">
            <a href='#ss' className="header-link">Cheaply.com</a>
            <a href='#dd' className="header-link">Cart</a>
            <a href='#dds' className="header-link">Sign up</a>
        </div>
    )

}
export default Header