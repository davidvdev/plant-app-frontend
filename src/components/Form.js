import React, { useState } from 'react'

const Form = (props) => {

    const [formData, setFormData] = useState(props.myPlant)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/")
    };

    const handleChange = (event) =>  {
        console.log(event.target.value)
        setFormData({...formData, [event.target.value]: event.target.value})
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <h2 className="form-title">Just one more step</h2>
                <h4 className="form-sub-title">Build your Plant's profile!</h4>    
            </div>
            <div className="main-form">
                <h3 className="form-question">What's your plant's name?</h3>
                <input
                    type="text"
                    name="nickname"
                    placeholder="Enter Name"
                    value={formData.nickname}
                    onChange={handleChange}
                />
                <h3 className="form-question">How often should your plant be watered in days? (1 = everyday)</h3>
                <input
                    type="number"
                    name="waterFrequency"
                    placeholder="Enter Frequency"
                    value={formData.waterFrequency}
                    onChange={handleChange}
                />
                <h3 className="form-question">How much water does your plant require for each watering session?</h3>
                <input
                    type="number"
                    name="waterAmount"
                    placeholder="Enter the amount of water in mL"
                    value={formData.waterAmount}
                    onChange={handleChange}
                />
                <h3 className="form-question">What's the optimal air temperature for your plant in degrees Fahrenheit?</h3>
                <input
                    type="number"
                    name="temperature"
                    placeholder="Enter Temperature in °F"
                    value={formData.temperature}
                    onChange={handleChange}
                />
                <h3 className="form-question">How much sunlight does your plant require?</h3>
                <label for="sun">Choose a value:</label>
                <select id="sun" name="sun" onChange="this.form.submit()">
                    <option value="sun">Full sun</option>
                    <option value="partial">Partial</option>
                    <option value="shade">Full Shade</option>
                </select>
                <input 
                    type="submit"
                    value="Add to Family"
                    className="submit-button"
                />
            </div>
        </form>
    ) 
};

export default Form