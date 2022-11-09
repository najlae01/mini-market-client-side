import React from "react";
import { useState } from "react";
import Logo from '../../img/logo.png';
import './Auth.css';
import {useDispatch, useSelector} from 'react-redux';
import { logIn, signUp } from "../../actions/AuthAction";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useRef } from "react";

const Auth = () => {
    const dispatch = useDispatch()
    const {error, loading} = useSelector((state)=>state.authReducer)
    const [isSignUp, setIsSignUp] = useState(true)
    const [data, setData] = useState({password:"", confirmpass: "", username:"", role:""})
    
    const checkboxid = useRef(null);
    const [message, setMessage] = useState(null)
    //const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            var chk = checkboxid.current.value;
            console.log(chk)
            if (chk) {   
                data.role = "isFournisseur"
            }
            data.password === data.confirmpass 
            ? dispatch(signUp(data)) 
            : setMessage("Passwords do not match")
            
        }else
        {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setMessage(null)
        setData({password:"", confirmpass: "", username:"", role:""})
    }

    return (
        <div className="Auth">
            
        <div className="blur" style={{ top: '-18%', right: '0' }}></div>
            <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
            {/* Left Side */}
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="webName">
                    <h1>MyShop</h1>
                    <h6>Find the best products for the cheapest prices.</h6>
                </div>
            </div>
            {/* Right Side */}
            <div className="a-right">
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader/>}
            <form className="infoForm authForm" onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Sign Up": "Log in"}</h3>
            
                <div>
                    <input type="text" placeholder="Username"
                     className="infoInput" name="username"
                     onChange={handleChange}
                     value = {data.username}/>
                </div>
                <div>
                    <input type="password" placeholder="Password"
                     className="infoInput" name="password"
                     onChange={handleChange}
                     value = {data.password}/>
                {isSignUp &&
                 <input type="password" placeholder="Confirm Password"
                 className="infoInput" name="confirmpass"
                 onChange={handleChange}
                 value = {data.confirmpass}/>
                }
                </div>
                {isSignUp && 
                <div>
                {/*<select name="role" id="role"
                 className="infoInput"
                 value={data.role}
                 onChange={handleChange}>
                 <option value= "Client">Buyer</option>
                 <option value= "Fournisseur">Vendor</option>
                 <option value= "Societe">Company</option>
                </select>*/}
                    <label>Vendor ?</label>
                    <label className="switch">
                    <input type="checkbox" ref={checkboxid} />
                    <span className="slider round"></span>
                    </label>
                </div>
                }
                
                {message && <Message variant='danger'>{message}</Message>}

                <div>
                    <span style={{fontSize: "12px", cursor: "pointer"}} onClick = {()=> {setIsSignUp((prev)=> !prev); resetForm()}}>
                    {isSignUp ? "Already have an account ? Login!": "Don't have an account ? Sign Up!"}</span>
                </div>
                <button className="button info-button" type="submit" disabled={loading}>
                    {loading? "Loading...": isSignUp ? "Sign Up" : "Log in"}</button>
            </form>
        </div>
        </div>
    )
}


export default Auth