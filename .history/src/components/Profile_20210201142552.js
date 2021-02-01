import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountContext'
import userimg from '../images/userBlack.svg'
import './form.css'

function Profile(props){
    const personalData={}
    const usercontext=useContext(AccountContext)
    const {user}=usercontext
    const handleFirstNameChanged = event=>{
        personalData.firstName=event.target.value
    }
    const handleLastNameChanged = event=>{
        personalData.lastName=event.target.value
    }
    const handleAdressChanged = event=>{
        personalData.adress=event.target.value
    }
    const handleZipChanged = event=>{
        personalData.zip=event.target.value
    }
    const handleCityChanged = event=>{
        personalData.city=event.target.value
    }
    const handleButtonClicked= ()=>{
       const {user,setUser}=usercontext
       setUser(user,personalData.firstName, personalData.lastName, personalData.adress, personalData.zip, personalData.city)

    }
    return(
    <div className='profile-container'>
        <img src={userimg} height='100rem'></img>
        <div className="row">
            <div className="col-25">
                <label for="fname">First Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name.." value={user!==null ? user.firstName : ''} onChange={handleFirstNameChanged}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={user!==null ? user.lastName : ''} onChange={handleLastNameChanged}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="adress">Adress</label>
            </div>
            <div className="col-75">
                <input type="text" id="adress" name="adress" placeholder="Your adress.." value={user!==null ? user.adress : ''} onChange={handleAdressChanged}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">Zip/Postal Code</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your zip/postal code.." value={user!==null ? user.zip : ''} onChange={handleZipChanged}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">City</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your city.." value={user!==null ? user.city : ''} onChange={handleCityChanged}></input>
            </div>
        </div>
        <button onClick={handleButtonClicked}>Submit</button>
    </div>
    )
}
export default Profile
