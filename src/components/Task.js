import React from "react"
import "../App.css"

const Task = (props) => {

    const loading = () => {<h1> loading...</h1>}

    const loaded = () => {
        const { tasks } = props.tasks
        console.log("task: ", tasks)
        // return <h2>success!</h2>
        // if (tasks.length > 1){
        //     return <h2>All Done!</h2>
        // }else {
            return <div className="task-container">
                <div className="task-bar">
                    <div className="plant-info">
                        <img src="https://img.lovepik.com/free_png/28/92/98/58PIC4258PICe58PICbbqcD4az58PICHP_PIC2018.png_860.png" alt="plant" />
                        <div className="task-info">
                            <h3>Plant name</h3>
                            <h4>Watering time</h4>
                            <h4>Water amount</h4>
                        </div>
                    </div>
                    <button>img</button>
                </div> 
            </div>
        // }
    }

    return props.tasks ? loaded() : loading()
};

export default Task 