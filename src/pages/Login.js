import React, { useState } from 'react'

const Login = (props) => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(formData)
    }

    return (
        <div className="login-screen">
            <h1>Welcome!</h1>
            <h2>please login or signup to continue</h2>
            <form onSubmit={handleSubmit}>
                <label for='username'>username:</label>
                <input type='text' name='username' id='username' onChange={handleChange} />
                <br />
                <label for='password'>password:</label>
                <input type='password' name='password' id='password' onChange={handleChange} />
                <br />
                <input type='submit' value='login' />
            </form>
        </div>
    )
}

export default Login