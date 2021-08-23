import React, { useState, useEffect } from 'react'
import {Route, Switch} from "react-router-dom"
import './App.css';
//import components
import Footer from './components/Footer';
import Home from './pages/Home';
import MyPlants from './pages/MyPlants';



function App() {

  const url = "https://plant-app-dval.herokuapp.com"

  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [taskList, setTaskList] = useState([]);

  //empty myPlant
  const emptyMyPlant = {
    nickname: "",
    waterFrequency: 1,
    sunlight: "",
    temperature: 70,
  }

  //state to track selected plant
  const [selectedPlant, setSelectedPlant] = useState(null)



  //Gets list of all myPlants
  const getMyPlants = () => {
    fetch(url + "/plants/")
      .then((response) => response.json())
      .then((data) => setMyPlants(data.data)
  )};

  useEffect(() => {getMyPlants()}, []);

  //Creates new myPlant
  const handleCreate = (newPlant) => {
    fetch(url + "/plants/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    }).then(() => {
      getMyPlants();
    })
  };

  //Update existing
  const handleUpdate = (plant) => {
    fetch(url + "/plants/" + plant._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    }).then(() => {
      getMyPlants();
    })
  };

  //Deletes a plant from myPlants
  const deleteMyPlant = (plant) => {
    fetch(url + "/plants/" + plant._id, {
      method: "delete",
    }).then(() => {
      getMyPlants();
    })
  };

  //adds tasks to taskList
  // const addTask = () => {
  //   const date = new Date()
  //   console.log(date - myPlants.waterAmount)
  //   if (date - myPlants.waterAmount > waterFrequency) {
      
  //   }
  //   // setTaskList([...taskList, task])
  // }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home taskList={taskList}/>
        </Route>
        <Route path="/myplants">
          <MyPlants myPlants={myPlants} selectedPlant={selectedPlant} />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
