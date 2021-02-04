import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountContext'
import userimg from '../images/userBlack.svg'
import './form.css'

function Profile(props){
    const usercontext=useContext(AccountContext)
    const {user}=usercontext
    const personalData = {'firstName': user.firstName, 'lastName': user.lastName, 'adress': user.adress, 'zip': user.zip, 'city': user.city}
    const handleFirstNameChanged = value=>{
        personalData.firstName=value
    }
    const handleLastNameChanged = value=>{
        personalData.lastName=value
    }
    const handleAdressChanged = value=>{
        personalData.adress=value
    }
    const handleZipChanged = value=>{
        personalData.zip=value
    }
    const handleCityChanged = value=>{
        personalData.city=value
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
                <input type="text" id="fname" name="firstname" placeholder="Your name.." defaultValue={user!==null ? user.firstName : ''} onChange={e=>handleFirstNameChanged(e.target.value)}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." defaultValue={user!==null ? user.lastName : ''} onChange={e=>handleLastNameChanged(e.target.value)}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="adress">Adress</label>
            </div>
            <div className="col-75">
                <input type="text" id="adress" name="adress" placeholder="Your adress.." defaultValue={user!==null ? user.adress : ''} onChange={e=>handleAdressChanged(e.target.value)}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">Zip/Postal Code</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your zip/postal code.." defaultValue={user!==null ? user.zip : ''} onChange={e=>handleZipChanged(e.target.value)}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">City</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your city.." defaultValue={user!==null ? user.city : ''} onChange={e=>handleCityChanged(e.target.value)}></input>
            </div>
        </div>
        <button onClick={handleButtonClicked}>Submit</button>
    </div>
    )
}
export default Profile
