import React, { useState, useEffect } from 'react'
import "../App.css"

const Form = (props) => {

    const [formData, setFormData] = useState(props.myPlant)
    const [plantNames, setPlantNames] = useState([])

    //function to get all plant names and ids
    //function to create inputs from available plants
    const createSearchItems = () => {
        let resultArr = props.plants.map(({type, _id}) => ({type, _id}))
        var options = resultArr.map(x => x.type)
        console.log(options)
    }
    createSearchItems()

    // const updatePlantNames = () => {
    //     setPlantNames(options)
    // }
 
    //useEffect(() => {updatePlantNames()}, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/home")
    };

    const handleChange = (event) =>  {
        console.log(event.target.value)
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <a onClick={() => props.history.goBack()}><i class="fas fa-arrow-circle-left fa-lg" ></i></a>
                <div>
                    <h2 className="form-title">Just one more step</h2>
                    <h4 className="form-sub-title">Build your Plant's profile!</h4>    
                </div>
            </div>
            <div className="test">
            <h3 className="form-question">Choose a plant type?</h3>
                <select value={formData.plantType.type}>
                    {plantNames.map((o) => (
                        <option value={o}>{o}</option>))}
                </select >
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
                <h3 className="form-question">How often should your plant be watered in days? (1 = everyday, 2 = every other day)</h3>
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
                <select id="sun" value={formData.sunlight} name="sunlight" onChange={handleChange}>
                    <option value="partial">Partial</option>
                    <option value="sun">Full sun</option>
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