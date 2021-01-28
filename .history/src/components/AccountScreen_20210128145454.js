import React from 'react'
import './componentStyle.css'
import user from '../images/user-person.svg'
import history from '../images/history.svg'
import logout from '../images/logout.svg'

function  AccountScreen(props) {
    return(
        <div className='account-screen'>
            <div className='settings'>
                <button><img src={user} height='20rem'></img> Profile</button>
                <button><img src={history} height='30rem'></img> History</button>
                <button><img src={logout} height="20rem"></img>Log out</button>
            </div>
            <div></div>
        </div>
    )
}

export default AccountScreen