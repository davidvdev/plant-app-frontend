import React, { useEffect } from 'react'
import {Link} from "react-router-dom"

const MyPlants = (props) => {

    const {myPlants} = props

    let count = myPlants.length

    return <>
    <div className="my-plant-header">
        <div>
            <h2 className="my-plant-title">My Plants</h2>
            <h4>You have {count} plants in your garden!</h4>
        </div>
        <div className="my-plant-icons">
            <Link to="/create">
                <i class="fas fa-plus fa-2x"></i>
            </Link>
            <Link to="/search">
                <i class="fas fa-search fa-2x"></i>
            </Link>
        </div>
    </div>
        <div className="plant-container">
            {myPlants.map((plant, index) => {
                return (
                    <Link to="/current-plant">
                        <div className="plant-container" onClick={() => props.selectedPlant(plant)}>
//                             <img className="plant-img" src={plant.plantType.picture}/>
                            <h3 className="plant-name">{plant.nickname}</h3>
                            <h4 className="plant-type">{plant.plantType.botName}</h4>
                        </div>
                    </Link>
                )
            })}
        </div>
    </>
}

export default MyPlants