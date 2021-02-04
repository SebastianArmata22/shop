import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountContext'
import './componentStyle.css'
import {NotificationManager} from 'react-notifications'

function SignUpScreen(props){
    const context=useContext(AccountContext)
    const personalData = {}
    const handleFirstNameChanged = value=>{
        personalData.firstName=value
    }
    const handleLastNameChanged = value=>{
        personalData.lastName=value
    }
    const handleEmailChanged = value=>{
        personalData.name=value
    }
    const handleButtonClicked= ()=>{
        context.toogleUser(personalData.name)
        context.setUser(personalData.name,personalData.firstName, personalData.lastName, null, null, null)
        NotificationManager.success('Registration completed successfully')
     }
    return(
        <div className='main-div'>
            <div className='sign-in-up-container'>
                <h3>Sign up</h3>
                <div className='profile-container'>
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={e=>handleFirstNameChanged(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={e=>handleLastNameChanged(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="adress">e-mail</label>
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Your e-mail.." onChange={e=>handleEmailChanged(e.target.value)}></input>
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
                    <Link to='/account/profile'>
                        <button onClick={handleButtonClicked}>Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SignUpScreen