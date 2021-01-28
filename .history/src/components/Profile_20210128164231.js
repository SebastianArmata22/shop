import React from 'react'
import user from '../images/userBlack.svg'

function Profile(props){
    return(
        <div>
            <img src={user} height='100rem'></img>
            <label>Name: <input type='name'></input></label>
            <label>Last Nmae: <input type='name'></input></label>
            <label>Phone: <input type='number'></input></label>

        </div>
    )
}
export default Profile
