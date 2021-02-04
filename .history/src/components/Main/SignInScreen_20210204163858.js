import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AccountContext } from '../../context/AccountContext'
import './componentStyle.css'
import user from '../../images/userBlack.svg'
import {NotificationManager} from 'react-notifications'

function SignInScreen(props){
    const context=useContext(AccountContext)
    const {toogleUser}=context
    const[email,setEmail]=useState(null)
    const validateEmail=(email)=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const handleChange=(event)=>{
        validateEmail(event.target.value) && setEmail(event.target.value)
    }
    const setAccountContext=()=>{
        email!==null && toogleUser(email)
        email!==null && NotificationManager.success('Logged in')
        email===null && NotificationManager.error('Wrong email')

    }
    const isOrder=props.match.params.order
    return(
        <div className='main-div'>
            <div className='sign-in-up-container'>
                <img src={user} height='50px'></img>
                <input type='email' name='login' placeholder='e-mail' onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password'/>
                <Link to={ email!==null && (isOrder==='true' ? '/order' : '/products')}>
                <button className='sign-in-btn' onClick={setAccountContext}>Sign up</button>
                </Link>
                <fieldset className='sign-up-container'>
                    <legend > New Users? </legend>
                    <Link to='/signup'>
                    <button className='sign-up-btn'>Sign up</button>
                    </Link>
                </fieldset>
            </div>
        </div>
    )
}
export default SignInScreen