import React, { useState } from 'react'
import './header-style.css'
import { Link } from 'react-router-dom';
import  cart from '../../images/shopping-cart.svg'


function Header(props){
    const [products, setProducts]=useState(0)
    return(
        <div className="header-container">
            <Link to='/' style={{ textDecoration: 'none', color: '#000000' }}>
                <a href='#ss' className="header-link"><b>PHONE
                    </b></a>
            </Link>

            <div className='user-card' style={{ textDecoration: 'none', color: '#000000' }>
                <Link to='/cart'>
                    <p>{products}</p>
                    <img src={cart} height='30px'></img>
                </Link>
                <Link to='/signin'>
                <a href='#dds' className="header-link">Sign in</a>
                </Link>
            </div>
        </div>
    )

}
export default Header