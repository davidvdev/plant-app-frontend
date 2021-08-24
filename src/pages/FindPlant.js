import React, { useState } from 'react'


const FindPlant = (props) => {

    //state to store the search term
    const [searchTerm, setSearchTerm] =useState("")
    //state to store the filtered plants
    const [results, setResults] = useState(props.myPlants)

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
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
    </>
};

export default FindPlant