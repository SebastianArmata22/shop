import React from 'react'
import user from '../images/userBlack.svg'
import './componentStyle.css'

function Profile(props){
    return(
        <div class='profile-container'>
            <img src={user} height='100rem'></img>
            <label>First Name <input type='name'></input></label>
            <label>Last Name <input type='name'></input></label>
            <label>Phone <input type='number'></input></label>
            <label>Adress <input type='name'></input></label>
            <label>Zip/Postal Code <input type='name'></input></label>
            <label>City <input type='name'></input></label>

        </div>
    )
}
export default Profile
