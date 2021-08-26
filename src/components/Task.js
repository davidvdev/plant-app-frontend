import React from "react"
import "../App.css"

const Task = (props) => {

    const { tasks } = props
    console.log("tasks: ", tasks)

    const loading = () => {<h1> loading...</h1>}

    const loaded = () => {

        const handleClick = (item) => {
            const {url, userAuth} = props
            console.log(item)
            const date = Date.now()

            fetch(url + "/myplants/" + item._id, {
                method: "put",
                headers: {
                    "Content-Type":"application/json",
                    authorization: 'bearer ' + userAuth.token
                },
                body: JSON.stringify({"lastWatering": date})
              })
              .then((response) => response.json())
              .then((data) => {
                  console.log("data: ", data)
                  props.getTasks()
                })};

        

        if (tasks.length < 1){
            return <h2>All Done!</h2>
        }else {
            // return <h2>NOT Done!</h2>
            return tasks.map(item => {
                return (
                <div className="task-container">
                    <div className="task-bar">
                        <div className="plant-info">
                            <img src={item.plantType.picture} alt="plant" />
                            <div className="task-info">
                                <h3>{item.nickname}</h3>
                                <h4>Water every {item.waterFrequency} days</h4>
                                <h4>{item.nickname} needs {item.waterAmount}mL of water</h4>
                            </div>
                        </div>
                        <i class="task-action fas fa-tint" onClick={() => handleClick(item)}></i>
                    </div> 
                </div>
                )
            })
        }
    }

    return props.tasks ? loaded() : loading()
};

export default Task 