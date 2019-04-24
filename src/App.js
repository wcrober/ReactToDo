import React, {Component} from 'react';
import './App.css';
import {PendingItems} from './Components/PendingItems'
import {CompletedItems} from './Components/CompletedItems'



class App extends Component {

    constructor() {
      super()
      
      this.state = {
        taskname: '',
        pendingItems: [],
        completedItems: []

      }

    }

 addTaskHandler = (e) => {
   this.setState({
     taskname: e.target.value
   })
 }
  

 saveTaskHandler = () => { 

    let taskname = this.state.taskname
    this.setState({
      pendingItems: this.state.pendingItems.concat(taskname)
    })
 }

 removeTask = (name) => {
   this.setState({
     pendingItems: this.state.pendingItems.filter((item) => item !== name  )
   })
 }

 handleCompleteClick = (e) => {
   let pendingNowTasks = this.state.pendingItems.filter((task, index) =>{
     return index !== parseInt(e.target.id)
   }
   )
   let task = e.target.value
   this.setState({
    completedItems: this.state.completedItems.concat(task),
    pendingItems:pendingNowTasks
    })
 }
   

  render(){
    const inputStyle = {
      border: '2px solid blue'
  }
    return (
      <div className='App'>
        <h1>ToDoList</h1>
        <input onChange={this.addTaskHandler} type="text" style={inputStyle} />
        <button onClick={this.saveTaskHandler}>Save</button>
        <label> Add a new Task</label>
        <PendingItems tasks={this.state.pendingItems} removeTaskHandler={this.removeTask} handleCompleteClick={this.handleCompleteClick}/>
        <CompletedItems tasks ={this.state.completedItems} completeTask={this.completeTask}/>
      </div>
    );
  }
}



export default App;
