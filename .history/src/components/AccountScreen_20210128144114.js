import React from 'react'
import './componentStyle.css'
import user from '../images/userBlack.svg'
import history from '../images/history.svg'

function  AccountScreen(props) {
    return(
        <div className='account-screen'>
            <div className='settings'>
                <button><img src={user} height='20rem'></img> Profile</button>
                <button><img src={history} ></img> History</button>
                <button>Log out</button>
            </div>
            <div></div>
        </div>
    )
}

export default AccountScreen