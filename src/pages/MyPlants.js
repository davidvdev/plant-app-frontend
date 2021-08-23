import React from 'react'

const MyPlants = (props) => {

    const {myPlants} = props

    let count = myPlants.length

    return <>
    <div className="myPlants-header">
        <div>
            <h2 className="myPlants-title">My Plants</h2>
            <h4>You have {count} plants in your garden!</h4>
        </div>
        <button><i class="fas fa-plus fa-2x"></i></button>
    </div>
        <div className="plant-container">
            {myPlants.map((plant, index) => {
                return (
                    <div className="plant-container" onClick={() => props.selectedPlant(plant)}>
                        <img className="plant-img" src={myPlants.plantType.picture}/>
                        <h3 className="plant-name">{myPlants.nickname}</h3>
                        <h4 className="plant-type">{myPlants.plantType.botName}</h4>
                    </div>
                )
            })}
        </div>
    </>
}

export default MyPlants