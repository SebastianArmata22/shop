import React from 'react'
import './componentStyle.css'
import user from '../images/userBlack.svg'

function  AccountScreen(props) {
    return(
        <div className='account-screen'>
            <div className='settings'>
                <button><img src={user} height='20rem'></img> Profile</button>
                <button>History</button>
                <button>Log out</button>
            </div>
            <div></div>
        </div>
    )
}

export default AccountScreen