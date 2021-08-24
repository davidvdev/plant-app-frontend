import React from "react"
import "../App.css"

const Task = (props) => {
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
};

export default Task 