import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AccountContext } from '../context/AccountContext'
import './componentStyle.css'

function SignInScreen(){
    const context=useContext(AccountContext)
    const {toogleUser}=context
    const[email,setEmail]=useState(null)
    const handleChange=(event)=>{
        setEmail(event.target.value)
    }
    const setAccountContext=()=>{
        toogleUser(email)
    }
    return(
        <div className='main-div'>
            <div className='sign-in-up-container'>
                <h2>Sign in</h2>
                <input type='email' name='login' placeholder='e-mail' onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password'/>
                <Link to={email!==''&& '/products'}>
                <button className='sign-in-btn' onClick={setAccountContext}>Sign up</button>
                </Link>
                <div>
                    <p>New Users?</p>
                    <Link to='/signup'>
                    <button className='sign-up-btn'>Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SignInScreen