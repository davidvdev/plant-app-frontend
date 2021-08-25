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
          data.data.length > 0 ? setTasks(data.data): setTasks(["All Done!"])
          )};

    useEffect(() => {getTasks()},[])
    // getTasks()

    return <>

    <h4>{props.dueDate.replaceAll("-"," ")}</h4>
    
        <Task tasks={tasks} />
    </>
}

export default TaskList