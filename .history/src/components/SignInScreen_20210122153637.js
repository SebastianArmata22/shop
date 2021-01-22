import React from 'react'
import { Link } from 'react-router-dom'
import './componentStyle.css'

function SignInScreen(){
    return(
        <div className='main-div'>
            <div className='sign-in-up-container'>
                <h2>Sign in</h2>
                <form>
                <input type='email' name='login' placeholder='e-mail'/>
                <input type='password' name='password' placeholder='Password'/>
                <input type='submit' value='Sign in'></input>
                </form>
                <div>
                    <p>New Users?</p>
                    <Link to='/signup'>
                    <button>Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SignInScreen