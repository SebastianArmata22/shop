import React, { useContext } from 'react'
import './componentStyle.css'
import './form.css'
import gpay from '../images/gpay.jpg'
import paypal from '../images/paypal.jpg'
import cod from '../images/cod.png'
import { AccountContext } from '../context/AccountContext'
function Order(props){
    const usercontext=useContext(AccountContext)
    const {user}=usercontext || {}
    return(
        <div className="cart-div" >
   <div className='profile-container'>
       <h3>The recipient's details</h3>
        <div className="row">
            <div className="col-25">
                <label for="fname">First Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name.." value={user.firstName}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={user.lastName}></input>
            </div>
        </div>
        <h3>Delivery address</h3>
        <div className="row">
            <div className="col-25">
                <label for="adress">Adress</label>
            </div>
            <div className="col-75">
                <input type="text" id="adress" name="adress" placeholder="Your adress.." value={user.adress}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">Zip/Postal Code</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your zip/postal code.." value={user.zip}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">City</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your city.." value={user.city}></input>
            </div>
        </div>
        <div className='payment-container'>
            <h3>Payment</h3>
            <div >
                <div className="payment-item">
                    <img src={gpay}></img>
                    <p>Google Pay</p>
                </div>
                <div className="payment-item">
                    <img src={paypal}></img>
                    <p>PayPal</p>
                </div>
                <div className="payment-item">
                    <img src={cod} style={{backgroundColor: '#ffffff'}}></img>
                    <p>Cash on delivery</p>
                </div>
            </div>
        </div>
        <button>Submit</button>
    </div>
        </div>
    )
}

export default Order