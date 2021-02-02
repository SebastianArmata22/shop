import React, { useContext } from 'react'
import './componentStyle.css'
import user from '../images/user-person.svg'
import history from '../images/history.svg'
import logoutSVG from '../images/logout.svg'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import Profile from './Profile'
import { AccountContext } from '../context/AccountContext'

function  AccountScreen(props) {
    const style={
        textDecoration: 'none',
        color: '#000000'
   }
   const usercontext=useContext(AccountContext)
   const {toogleUser}=usercontext

   const logout = () => {
    toogleUser(null)

   }
    return(
        <div className='account-screen'>
            <div className='settings'>
                <Link to='/account/profile' style={style}>
                    <button><img src={user} height='20rem'></img> <p>Profile</p></button>
                </Link>
                <Link to='/' style={style}>
                    <button onClick={logout}><img src={logoutSVG} height="20rem" ></img><p>Log out</p></button>
                </Link>
            </div>
                <div className='account-container'>
                    <Route path="/account/profile" exact='true' component={Profile} />
                </div>
        </div>
    )
}

export default AccountScreen