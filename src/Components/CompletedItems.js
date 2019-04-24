import React, {Component} from 'react'
import './PendingItems.css';

export class CompletedItems extends Component {

   

    render() {

        let tasks = this.props.tasks
        
        let completedtasks = tasks.map((task, index) => {
            return(
                <li key ={index}>{task}</li>
            )
        }) 
        
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <h2>Completed Tasks</h2>
                <ul className="lists">{completedtasks}</ul>
            </div>
        )


    }
}