import React from "react"
import "../App.css"

const Plant = (props) => {

    const {myPlants} = props

    return <div className="plant-container">
        <img className="plant-img" src={}/>
        <h3 className="plant-name">{myPlants.nickname}</h3>
        <h4 className="plant-type">{myPlants.nickname}</h4>
    </div>

}