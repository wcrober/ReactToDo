import React, {Component} from 'react';
import './PendingItems.css';

export class PendingItems extends Component {

    handleRemoveClick = (name) => {
        this.props.removeTaskHandler(name)
    }

    

    render() {

        let tasks = this.props.tasks

        let taskItems = tasks.map((task,index) => {
            return (
                <div>
                <li className="tasklist" key={index}>{task} 
                <button onClick={() => this.handleRemoveClick(task)}>Delete</button> 
                <button id={index} value={task} onClick={this.props.handleCompleteClick}>Completed</button>
                </li>
                </div>
            )

        })
        
        return (
            <div >
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <h2>Pending Tasks</h2>
                <ul className="lists">{taskItems}</ul>
            </div>
        )


    }





}