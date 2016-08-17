import React from 'react';
import TodoList from './todo_list.jsx'
import TodoInput from './todo_input.jsx'
import TodoStore from '../stores/todo_store'
import AppDispatcher from '../dispatcher/AppDispatcher'
import TodoConstants from '../constants/TodoConstants'
import {fetchTodos, addTodo } from '../api'

const Header = () => <h1>My React Todo</h1>

const App = React.createClass({
  getInitialState(){
    var todos = TodoStore.getAllTodos()
    return {todos: todos}
  },

 componentDidMount(){
  TodoStore.addChangeListener(() => {
   this.setState({
    todos: TodoStore.getAllTodos()
   })
  });
  AppDispatcher.dispatch({type: TodoConstants.LOADING});
  fetchTodos('all').then(todos => {
    AppDispatcher.dispatch({
      type: TodoConstants.FETCH_TODOS,
      'todos': todos
    })
  })
 },

  render(){
    return <div>
         <Header />
         <TodoList todos={this.state.todos}/>
         <TodoInput />
      </div>;
  }
})

module.exports = App
