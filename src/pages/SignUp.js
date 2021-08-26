import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import "../App.css"

const SignUp = (props) => {

    const history = useHistory();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.signUp(formData)
        history.push("/login")
    }

    return (
        <div className="signup-screen">
            <div className="signup-block">
                <div className="signup-header">
                    <Link to="/">
                        <i class="fas fa-arrow-circle-left fa-2x" style={{color: "gray"}} ></i>
                    </Link>
                    <h1 className="app-title">Create Account</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* <label for='name'>Name:</label>
                    <input type='text' name='name' id='name' onChange={handleChange} />
                    <br /> */}
                    <label className="login-label" for='username'>username:</label>
                    <input type='text' name='username' id='username' onChange={handleChange} />
                    <br />
                    <label className="login-label" for='password'>password:</label>
                    <input type='password' name='password' id='password' onChange={handleChange} />
                    <br />
                    <input className="signup-button" type='submit' value='Register' style={{alignSelf: "center"}}/>
                </form>
            </div>
        </div>
    )
};

export default SignUp