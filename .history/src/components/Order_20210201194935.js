import React, { useContext } from 'react'
import './componentStyle.css'
import './form.css'
import gpay from '../images/gpay.jpg'
import paypal from '../images/paypal.jpg'
import cod from '../images/cod.png'
import { AccountContext } from '../context/AccountContext'
import { OrderContext } from '../context/OrderContext'
function Order(props){
    const [products, setProducts]=useState(JSON.parse(localStorage.getItem("product") || "[]"));
    const ordercontext=useContext(OrderContext)
    const usercontext=useContext(AccountContext)
    const {user}= usercontext
    const addToOrder=()=>{
        products.map(product=>{
            ordercontext.setOrders(product)
        })
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
                <input type="text" id="fname" name="firstname" placeholder="Your name.." defaultValue={user!==null ? user.firstName : ''}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." defaultValue={user!==null ? user.lastName : ''}></input>
            </div>
        </div>
        <h3>Delivery address</h3>
        <div className="row">
            <div className="col-25">
                <label for="adress">Adress</label>
            </div>
            <div className="col-75">
                <input type="text" id="adress" name="adress" placeholder="Your adress.." defaultValue={user!==null ? user.adress : ''}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">Zip/Postal Code</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your zip/postal code.." defaultValue={user!==null ? user.zip : ''}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname">City</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your city.." defaultValue={user!==null ? user.city : ''}></input>
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
        <button onClick={addToOrder}>Submit</button>
    </div>
        </div>
    )
}

export default Order