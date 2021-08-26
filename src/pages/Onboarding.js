import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Onboarding = (props) => {
    return <>
        <i style={{color: "green"}} class="fas fa-leaf fa-9x"></i>
        <h1 className="app-title">plantie</h1>
        <h3 className="welcome">Welcome! We will help you to take care of your plants!</h3>
        <div className="onboarding-buttons">
            <Link to="/signup">
                <button className="onboarding-button">Sign up</button>
            </Link>
            <Link to="/login">
                <button className="onboarding-button">Login in</button>
            </Link>
        </div>
    </>
};

export default Onboarding