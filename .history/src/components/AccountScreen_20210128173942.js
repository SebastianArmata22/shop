import React from 'react'
import './componentStyle.css'
import user from '../images/user-person.svg'
import history from '../images/history.svg'
import logout from '../images/logout.svg'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import Profile from './Profile'
import History from './History'

function  AccountScreen(props) {
    return(
        <div className='account-screen'>
            <div className='settings'>
                <Link to='/account/profile'>
                    <button><img src={user} height='20rem'></img> Profile</button>
                </Link>
                <Link to='/account/history' >
                    <button><img src={history} height='20rem'></img> History</button>
                </Link>
                <button><img src={logout} height="20rem"></img>Log out</button>
            </div>
            <BrowserRouter>
                <div className='account-container'>
                    <Route path="/account/profile" component={Profile} />
                    <Route path="/account/history" component={History} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default AccountScreen