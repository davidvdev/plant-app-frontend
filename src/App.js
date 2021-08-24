import React, { useState, useEffect } from 'react'
import {Route, Switch} from "react-router-dom"
import './App.css';
//import components
import Footer from './components/Footer';
import Home from './pages/Home';
import MyPlants from './pages/MyPlants';
import Form from './components/Form';
import FindPlant from './pages/FindPlant';
import PlantCard from './components/PlantCard';



function App() {

  const url = "https://plant-app-dval.herokuapp.com"

  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [taskList, setTaskList] = useState([]);

  //empty myPlant
  const emptyMyPlant = {
    nickname: "",
    waterFrequency: 1,
    waterAmount: 50,
    sunlight: "",
    temperature: 70,
  }

  //state to track selected plant
  const [selectedPlant, setSelectedPlant] = useState(emptyMyPlant)

  //updates the selectedPlant state to track active plant
  const selectPlant = (plant) => {
    setSelectedPlant(plant)
  };

  //Gets list of all Plants
  const getPlants = () => {
    fetch(url + "/plants/")
      .then((response) => response.json())
      .then((data) => setPlants(data.data)
  )};

  //Gets list of all myPlants
  const getMyPlants = () => {
    fetch(url + "/myplants/")
      .then((response) => response.json())
      .then((data) => setMyPlants(data.data)
  )};

  useEffect(() => {getPlants()}, []);

  //Creates new myPlant
  const handleCreate = (newPlant) => {
    fetch(url + "/myplants/", {
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
    fetch(url + "/myplants/" + plant._id, {
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
    fetch(url + "/myplants/" + plant._id, {
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
          <MyPlants myPlants={myPlants} selectPlant={selectPlant} handleCreate={handleCreate} deleteMyPlant={deleteMyPlant}/>
        </Route>
        <Route path="/current-plant" render={(rp) => <PlantCard {...rp} myPlant={selectedPlant}/>}/>
        <Route path="/search" render={(rp) => <FindPlant {...rp} myPlants={myPlants} />}/>
        <Route path="/create" render={(rp) => (
          <Form {...rp} label="create" myPlant={emptyMyPlant} handleSubmit={handleCreate}/>)}/>
        <Route path="/edit" render={(rp) => (
          <Form {...rp} label="edit" myPlant={selectedPlant} handleSubmit={handleUpdate}/>)}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
