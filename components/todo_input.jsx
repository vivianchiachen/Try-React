import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher'
import TodoConstant from '../constants/TodoConstants'


const TodoInput = React.createClass({
  getInitialState(){
    return {text:''}
  },

  addTodoItem(){
    AppDispatcher.dispatch({
    type: TodoConstants.ADD_TODO,
    text: this.state.text
    })
    this.setStates({text:''})
  },

  handleChange(evt){
   this.setState({text: evt.target.value})
  },

   render(){
     return <div>
     <label htmlFor="input_todo">
       New Todo!
       </label>
      <input id="input_todo" type="text"
        value ={this.state.text}
        onChange={this.handleChange}/>
       <button onClick={this.addTodo}>Add</button>
     </div>
   }

})
module.exports = TodoInput
