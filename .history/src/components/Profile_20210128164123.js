import React from 'react'
import user from '../images/userBlack.svg'

function Profile(props){
    return(
        <div>
            <img src={user} height='100rem'></img>
            <input type='name'></input>
        </div>
    )
}
export default Profile
