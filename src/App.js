import React, { useState, useEffect } from 'react'
import {Route, Switch} from "react-router-dom"
import './App.css';
//import components
import Onboarding from './pages/Onboarding';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import Footer from './components/Footer';
import Home from './pages/Home';
import MyPlants from './pages/MyPlants';
import Form from './components/Form';
import FindPlant from './pages/FindPlant';
import PlantCard from './components/PlantCard';
import TeamPage from './pages/TeamPage';



function App() {

  const url = "https://plant-app-dval.herokuapp.com"

  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [userAuth, setUserAuth] = useState([]);

  //empty myPlant
  const emptyMyPlant = {
    nickname: "",
    username: "",
    plantType: [{
      type:"", 
      botName: "", 
      otherNames: [], 
      description: "", 
      picture: "", 
      uses: "", 
      propagation: "", 
      soil: "", 
      climate: "", 
      health: "" }],
    lastWatering: Date.now(),
    waterFrequency: 1,
    waterAmount: 50,
    sunlight: "partial",
    temperature: 70,
    plantid: ""
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

  //sign up user
  const signUp = (credentials) => {
    fetch(url + "/user/signup", {
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
  useEffect(() => {getMyPlants()}, [userAuth]);

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


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Onboarding/>
        </Route>
        <Route path='/signup'>
          <SignUp signUp={signUp}/>
        </Route>
        <Route path='/login'>
          <Login login={login} getMyPlants={getMyPlants}/>
        </Route>

        <Route path="/home" render={(rp) => 
          <div>
            <Home {...rp} taskList={taskList} myPlants={myPlants} getMyPlants={getMyPlants} url={url} userAuth={userAuth}/>
            <Footer/>
          </div>}>
        </Route>
        <Route path="/myplants" render={(rp) => 
          <div>
            <MyPlants {...rp} myPlants={myPlants} selectPlant={selectPlant} handleCreate={handleCreate} getMyPlants={getMyPlants}/>
            <Footer/>
          </div>}/>
        <Route path="/current-plant" render={(rp) => 
          <div>
            <PlantCard {...rp} myPlant={selectedPlant} selectPlant={selectPlant} deleteMyPlant={deleteMyPlant}/>
            <Footer/>
          </div>}/>
        <Route path="/search" render={(rp) => 
          <div>
            <FindPlant {...rp} myPlants={myPlants} selectPlant={selectPlant}/>
            <Footer/>
          </div>}/>
          <Route path="/team" render={(rp) => 
          <div>
            <TeamPage {...rp}/>
            <Footer/>
          </div>}/>
        <Route path="/create" render={(rp) => 
          <Form {...rp} label="create" myPlant={emptyMyPlant} plants={plants} handleSubmit={handleCreate}/>}/>
        <Route path="/edit" render={(rp) => (
          <Form {...rp} label="edit" myPlant={selectedPlant} plants={plants} handleSubmit={handleUpdate}/>)}/>
      </Switch>
    </div>
  );
}

export default App;
