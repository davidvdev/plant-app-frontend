import React from 'react'
import TaskList from '../components/TaskList'


const Home = (props) => {
    const {myPlants} = props
  
    return <>
    <div className="task-page">
        <h2>Todays Tasks</h2>
        <h4>todays date</h4>

        <TaskList myPlants={myPlants} />
    </div>
    </>

}

export default Home