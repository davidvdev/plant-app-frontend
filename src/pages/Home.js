import React from 'react'
import TaskList from '../components/TaskList'


const Home = (props) => {

    const loading = () => {
        props.getMyPlants()
        
        return <h1>loading...</h1>
    }

    const loaded = () => {
        const {myPlants} = props
    
        return <>
        <div className="task-page">
            <h2>Todays Tasks</h2>
            <h4>todays date</h4>

            <TaskList myPlants={myPlants} />
        </div>
        </>
    }

    return props.myPlants ? loaded() : loading();

}

export default Home