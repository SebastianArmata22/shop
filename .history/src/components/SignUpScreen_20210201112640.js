import React from 'react'
import './componentStyle.css'

function SignUpScreen(props){
    return(
        <div className='main-div'>
                <div className='sign-in-up-container'>
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
                <label for="adress">e-mail</label>
            </div>
            <div className="col-75">
                <input type="email" id="email" name="email" placeholder="Your e-mail.."></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">Password</label>
            </div>
            <div className="col-75">
                <input type="password" id="password" name="password" placeholder="Your password.."></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">Repeat password</label>
            </div>
            <div className="col-75">
                <input type="password" id="repeatpassword" name="repeatpassword" placeholder="Your password.."></input>
            </div>
        </div>
        <button>Submit</button>
    </div>
                 </div>
        </div>
    )
}
export default SignUpScreen