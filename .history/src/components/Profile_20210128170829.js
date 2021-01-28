import React from 'react'
import user from '../images/userBlack.svg'
import './form.css'
import './componentStyle.css'

function Profile(props){
    return(
    <div className='profile-container'>
        <div className="row">
            <div className="col-25">
                <label for="fname">First Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="country">Country</label>
            </div>
            <div className="col-75">
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="subject">Subject</label>
            </div>
            <div className="col-75">
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 200+'px'}}></textarea>
            </div>
        </div>
        <div className="row">
            <input type="submit" value="Submit"></input>
        </div>
    </div>
    )
}
export default Profile
