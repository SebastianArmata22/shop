import React, { useContext} from 'react'
import './header-style.css'
import { Link } from 'react-router-dom';
import  cart from '../../images/shopping-cart.svg'
import { CartContext } from '../../context/CartContext';
import { AccountContext } from '../../context/AccountContext';
import userSVG from '../../images/user.svg'


function Header(props){
    const context=useContext(CartContext)
    const usercontext=useContext(AccountContext)
    const {user}=usercontext
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
               {user===null ?  <Link to='/signin/false' style={style}>
                <a href='#dds' className="header-link">Sign in</a>
                </Link> : <Link to='/account/profile'><img src={userSVG} height='30px' className='user-cart-img'></img></Link>}
            </div>
        </div>
    )

}
export default Header