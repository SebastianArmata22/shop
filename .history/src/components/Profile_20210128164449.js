import React from 'react'
import user from '../images/userBlack.svg'

function Profile(props){
    return(
        <div>
            <img src={user} height='100rem'></img>
            <label>Name <input type='name'></input></label>
            <label>Last Namae <input type='name'></input></label>
            <label>Phone <input type='number'></input></label>
            <label>Adress <input type='name'></input></label>
            <label>Zip/Postal Code <input type='name'></input></label>
            <label>City <input type='name'></input></label>

        </div>
    )
}
export default Profile
