import React from 'react'
import './componentStyle.css'

function SignUpScreen(props){
    return(
        <div>
                <div className='sign-in-up-container'>
                <h2>Sign up</h2>
                <form>
                <input type='email' name='login' placeholder='e-mail'/>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='surname' placeholder='Surname'/>
                <input type='password' name='password' placeholder='Password'/>
                <input type='password' name='password' placeholder='Repeat password'/>
                <input type='submit' value='Sign up'></input>
                </form>
            </div>
        </div>
    )
}
export default SignUpScreen