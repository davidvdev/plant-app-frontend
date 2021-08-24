import React from 'react'
import Task from '../components/Task'


const Home = (props) => {
    const {myPlants} = props
  
    return <>
    <div className="task-page">
        <h2>Todays Tasks</h2>
        <h4>todays date</h4>

        <Task myPlants={myPlants} />
    </div>
    </>
}

export default Home