import React, { useState, useEffect } from 'react'
import {Route, Switch} from "react-router-dom"
import './App.css';
//import components
import Login from './pages/Login'
import Footer from './components/Footer';
import Home from './pages/Home';
import MyPlants from './pages/MyPlants';
import Form from './components/Form';



function App() {

  const url = "https://plant-app-dval.herokuapp.com"

  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [userAuth, setUserAuth] = useState([]);

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

  // login in user
  const login = (credentials) => {
    fetch(url + "/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials)
    }).then((response) => response.json())
    .then((data) => setUserAuth(data))
    .then(() => getMyPlants())
  }

  //Gets list of all myPlants
  const getMyPlants = () => {
    fetch(url + "/myplants/", {
      method: "get",
      headers: {authorization: 'bearer ' + userAuth.token}
    })
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
        authorization: 'bearer ' + userAuth.token
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
        authorization: 'bearer ' + userAuth.token
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
      headers: {authorization: 'bearer ' + userAuth.token}
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
        <Route exact path='/login'>
          <Login login={login}/>
        </Route>
        <Route exact path="/">
          <Home taskList={taskList}/>
        </Route>
        <Route path="/myplants" >
          <MyPlants myPlants={myPlants} selectPlant={selectPlant} handleCreate={handleCreate} deleteMyPlant={deleteMyPlant}/>
        </Route>
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
