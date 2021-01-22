import React from 'react'
import './componentStyle.css'

function SignInScreen(){
    return(
        <div className='main-div'>
            <div className='sign-up-container'>
                <h2>Sign in</h2>
                <form>
                <input type='text' name='login' placeholder='Login'/>
                <input type='password' name='password' placeholder='Password'/>
                <input type='submit' value='Sign in'></input>
                </form>
                <button>Sign up</button>
            </div>
        </div>
    )
}
export default SignInScreen