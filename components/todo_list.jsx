import React from 'react';
import _ from 'lodash';
const TodoItem = (props) => {
  return <li>{props.todo.text}</li>
}

const TodoList = React.createClass({
  todos(){
    var todosList = _.values(this.props.todos)
      return todosList.map(todo => {
        return <TodoItem todo={todo} key={"todo"+ todo.id}/>
      })

  },
  render(){
    return <div>
    <h2>Todos</h2>
    <ul>
    {this.todos()}
    </ul>
   </div>

  }



})
module.exports = TodoList
