import React, { useContext, useState } from 'react'
import './componentStyle.css'
import './form.css'
import gpay from '../images/gpay.jpg'
import paypal from '../images/paypal.jpg'
import cod from '../images/cod.png'
import { AccountContext } from '../context/AccountContext'
import { OrderContext } from '../context/OrderContext'
import { Link } from 'react-router-dom';

function Order(props){
    const [products, setProducts]=useState(JSON.parse(localStorage.getItem("product") || "[]"));
    const ordercontext=useContext(OrderContext)
    const usercontext=useContext(AccountContext)
    const {user}= usercontext
    const orderData=AccountContext.user
    console.log("order", orderData)
    const handleFirstNameChanged = value=>{
        orderData.firstName=value
    }
    const handleLastNameChanged = value=>{
        orderData.lastName=value
    }
    const handleAdressChanged = value=>{
        orderData.adress=value
    }
    const handleZipChanged = value=>{
        orderData.zip=value
    }
    const handleCityChanged = value=>{
        orderData.city=value
    }
    const handleButtonClicked= ()=>{
        ordercontext.changeDeliveryAdress(orderData)
     }
     const choosePayment=(payment)=>{
        ordercontext.changePaymentMethod(payment)

     }
     const addToOrder=()=>{
        products.map(product=>{
            ordercontext.changeOrder(product)
        })
        handleButtonClicked()
    }
    return(
        <div className="cart-div" >
   <div className='profile-container'>
       <h3>The recipient's details</h3>
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
        <h3>Delivery address</h3>
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
        <div className='payment-container'>
            <h3>Payment</h3>
            <div >
                <div className="payment-item" onClick={()=>choosePayment(1)}>
                    <img src={gpay}></img>
                    <p>Google Pay</p>
                </div>
                <div className="payment-item" onClick={()=>choosePayment(2)}>
                    <img src={paypal}></img>
                    <p>PayPal</p>
                </div>
                <div className="payment-item">
                    <img src={cod} style={{backgroundColor: '#ffffff'}} onClick={()=>choosePayment(3)}></img>
                    <p>Cash on delivery</p>
                </div>
            </div>
        </div>
        <Link to='/sumarry'>
            <button onClick={addToOrder}>Submit</button>
        </Link>
    </div>
        </div>
    )
}

export default Order