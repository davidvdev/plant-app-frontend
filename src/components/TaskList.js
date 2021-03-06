import React, { useEffect, useState } from 'react'
import Task from './Task'


const TaskList = (props) => { 
    
    const [tasks, setTasks] = useState([])

    const {myPlants} = props

    //Gets task list based on dueDate passed down
    const getTasks = () => {
    fetch(props.url + "/myplants/wateringdue/" + props.dueDate, {
        method: "get",
        headers: {authorization: 'bearer ' + props.userAuth.token}
      })
      .then((response) => response.json())
      .then((data) => 
          data.data.length > 0 ? setTasks(data.data): setTasks([])
          )};

    useEffect(() => {getTasks()},[])
    // getTasks()

    return <>

    <h4>{props.dueDate.replaceAll("-"," ")}</h4>
    
        <Task tasks={tasks} url={props.url} userAuth={props.userAuth} getTasks={getTasks} getMyPlants={props.getMyPlants}/>
    </>
}

export default TaskList