import React from 'react'
import './componentStyle.css'
import './form.css'
function Order(props){
    return(
        <div className="cart-div" >
   <div className='profile-container'>
       <h3>The recipient's details</h3>
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
        <h3>Delivery address</h3>
        <div className="row">
            <div className="col-25">
                <label for="adress">Adress</label>
            </div>
            <div className="col-75">
                <input type="text" id="adress" name="adress" placeholder="Your adress.."></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">Zip/Postal Code</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your zip/postal code.."></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">City</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your city.."></input>
            </div>
        </div>
        <div className='payment-container'>
            <ul>
                <li></li>
            </ul>
        </div>
        <button>Submit</button>
    </div>
        </div>
    )
}

export default Order