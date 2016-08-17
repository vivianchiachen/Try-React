var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');
var {v4} = require('node-uuid');
var {fetchTodos, addTodo } = require('../api')

var CHANGE_EVENT = 'change';

// var todos = [
//     {
//           id: "todo1",
//           description: "buy the milk",
//           done: false
//         },
//     {
//           id: "todo2",
//           description: "save New york",
//           done: false
//         },
//      {
//           id: "todo3",
//           description: "learn react",
//           done: false
//         }
// ]


// //id: 1, data: {done: true}
// function updateTodo(id, data){
//  _todo[id] = assign({}, _todos[id], data)
// }
var _todos = {};
var TodoStore = assign({}, EventEmitter.prototype, {
  getAllTodos:function(){
    return _todos;
  },
  emitChange: function(){
   this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
   this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
   this.removeListener(CHANGE_EVENT, callback);
  },
});

module.exports = TodoStore;

AppDispatcher.register(function(action){
switch(action.type) {
    case TodoConstants.FETCH_TODOS:
      _todos = action.todos
      TodoStore.emitChange();
      console.log('loaded');
      break;


    case TodoConstants.ADD_TODO:
      var text = action.description.trim();
      create(text)
      TodoStore.emitChange();
      console.log('loaded');
      break;

    case TodoConstants.UPDATE_TODO:
      break;

    case TodoConstants.LOADING:
      console.log('loading...')
      break;

    default:
      console.log('Unknown action: '+ action.type)
      break;
   }
})
