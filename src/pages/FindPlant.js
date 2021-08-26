import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const FindPlant = (props) => {

    //state to store the filtered plants
    const [results, setResults] = useState(props.myPlants)
    //state to store the search term
    const [searchTerm, setSearchTerm] = useState()


    const handleChange = (event) => {
        setSearchTerm(event.target.value)
        if(searchTerm === ""){
            setResults(props.myPlants)
        } else {
            setResults(props.myPlants.filter(item => item.nickname.includes(event.target.value)))
        }
    };


    return <>
        <div className="search-header">
            <a onClick={() => props.history.goBack()}><i class="fas fa-arrow-circle-left fa-lg" ></i></a>
            <h2>Find a Plant</h2>
        </div>
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
        <div className="my-plant-container">
        {results.map(item => {
            return (
                    <Link to="/current-plant">
                        <div className="plant-container" onClick={() => props.selectPlant(item)}>
                            <img className="plant-img" src={item.plantType.picture}/>
                            <h3 className="plant-name">{item.nickname}</h3>
                            <h4 className="plant-type">{item.plantType.botName}</h4>
                        </div>
                    </Link>
                    )
            }   
            )}
        </div>
    </>
};

export default FindPlant