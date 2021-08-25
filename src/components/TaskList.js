import React, { useEffect } from 'react'
import Task from './Task'


const TaskList = (props) => { 
  
    const {myPlants} = props

    //Gets task list based on dueDate passed down
    const getTasks = () => {
    fetch(props.url + "/myplants/wateringdue/" + props.dueDate, {
        method: "get",
        headers: {authorization: 'bearer ' + props.userAuth.token}
      })
      .then((response) => response.json())
      .then((data) => console.log(data)
  )};

    useEffect(() => {getTasks()},[])

    return <>

    <h4>{props.dueDate.replaceAll("-"," ")}</h4>
    
        <Task myPlants={myPlants} />
    </>
}

export default TaskList