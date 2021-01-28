import React from 'react'
import user from '../images/userBlack.svg'

function Profile(props){
    return(
        <div>
            <img src={user} height='100rem'></img>
            <label>Name: <input type='name'></input></label>
        </div>
    )
}
export default Profile
