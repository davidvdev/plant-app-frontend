import React, { useEffect } from 'react'
import TaskList from '../components/TaskList'


const Home = (props) => {

    useEffect(()=>{props.getMyPlants()},[])

    const loading = () => {
        props.getMyPlants()

        return <h1>loading...</h1>
    }

    const loaded = () => {
        const {myPlants} = props
        
        const today = Date().toString().split(" ").splice(1,3).toString().replaceAll(",","-")
        let tomorrow = Date().toString().split(" ").splice(1,3)
            tomorrow[1] = Number(tomorrow[1]) + 1
            tomorrow = tomorrow.toString().replaceAll(",","-")
        let dayAfter = Date().toString().split(" ").splice(1,3)
            dayAfter[1] = Number(dayAfter[1]) + 2
            dayAfter = dayAfter.toString().replaceAll(",","-")

        return <>
        <div className="task-page">
            <h2>Todays Tasks</h2>
            <TaskList myPlants={myPlants} dueDate={today} url={props.url} userAuth={props.userAuth} getMyPlants={props.getMyPlants} />
            <TaskList myPlants={myPlants} dueDate={tomorrow} url={props.url} userAuth={props.userAuth} getMyPlants={props.getMyPlants} />
            <TaskList myPlants={myPlants} dueDate={dayAfter} url={props.url} userAuth={props.userAuth} getMyPlants={props.getMyPlants} />
        </div>
        </>
    }

    return props.myPlants ? loaded() : loading();

}

export default Home