import React from 'react'
import "../App.css"

const PlantCard = (props) => {

    const { myPlant } = props

    return <>
        
        <div className="card-container">
            <div className="card-img-header">
                <a onClick={() => props.history.goBack()}><i class="fas fa-arrow-circle-left fa-lg" ></i></a>
                <img src={myPlant.plantType.picture}/>
            </div>
            <div className="card-header">
                <div>
                    <h2 className="card-name">{myPlant.nickname}</h2>
                    <h4 className="card-type">{myPlant.plantType.type}</h4>
                </div>
                <div className="card-alert">Water in {myPlant.waterFrequency} days!</div>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <i class="far fa-calendar-alt fa-2x"></i>
                    <div className="stat-info">
                        <h4>Frequency</h4>
                        <p>{myPlant.waterFrequency}</p>
                    </div>
                </div>
                <div className="stat">
                    <i class="fas fa-tint fa-2x"></i>
                    <div className="stat-info">
                        <h4>Water</h4>
                        <p>{myPlant.waterAmount} mL</p>
                    </div>
                </div>
                <div className="stat">
                    <i class="fas fa-sun fa-2x"></i>
                    <div className="stat-info">
                        <h4>Sunlight</h4>
                        <p>{myPlant.sunlight}</p>
                    </div>
                </div>
                <div className="stat">
                    <i class="fas fa-thermometer-half fa-2x"></i>
                    <div className="stat-info">
                        <h4>Temperature</h4>
                        <p>{myPlant.temperature} °F</p>
                    </div>
                </div>
                <div >
                    <div className="card-buttons">
                        <button className="edit-button" onClick={() => {
                            props.selectPlant(myPlant)
                            props.history.push("/edit")
                            }}>Edit</button>
                        <button className="delete-button" onClick={() => {
                            props.deleteMyPlant(myPlant)
                            props.history.push("/myplants")
                            }}>Delete</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="card-description">
                <h3>Description</h3>
                <p>{myPlant.plantType.description}</p>
            </div>
            <hr />
            <div className="card-health">
                <h3>Uses</h3>
                <p>{myPlant.plantType.uses}</p>
            </div>
        </div>
    </>
};

export default PlantCard