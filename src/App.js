import React, { useState } from 'react'
import {Route, Switch} from "react-router-dom"
import './App.css';
//import components
import Footer from './components/Footer';
import Home from './pages/Home';



function App() {

  const url = "https://plant-app-dval.herokuapp.com"

  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [taskList, setTaskList] = useState([]);

  //empty plant

  //adds tasks to taskList
  const addTask = () => {
    const date = new Date()
    console.log(date - myPlants.waterAmount)
    if (date - myPlants.waterAmount > waterFrequency) {
      
    }
    // setTaskList([...taskList, task])
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home taskList={taskList}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
