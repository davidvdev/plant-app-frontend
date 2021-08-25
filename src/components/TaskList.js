import React from 'react'
import Task from './Task'


const TaskList = (props) => { 
  
    const {myPlants} = props

    return <>

    <h4>todays date</h4>
    
        <Task myPlants={myPlants} />
    </>
}

export default TaskList