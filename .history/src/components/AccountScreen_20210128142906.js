import React from 'react'
import './componentStyle.css'

function  AccountScreen(props) {
    return(
        <div className='account-screen'>
            <div className='settings'>
                <button>Profile</button>
                <button>History</button>
                <button>Log out</button>
            </div>
            <div></div>
        </div>
    )
}

export default AccountScreen