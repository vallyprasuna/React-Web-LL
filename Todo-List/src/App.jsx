import { createContext, useState, useContext } from 'react';
import './App.css'
import TodoList from './todolist';
import NewToDoItem from './newtodoitem';

function App() {

  const [completedTodos, setCompletedTodos] = useState([{name:'First task', isComplete: true}]);
  const [inCompleteTodos, setInCompleteTodos] = useState([{name: 'Second Task', isComplete: false}]);

  function onDelete(itemname) {
    console.log("Deleted", itemname)
    setCompletedTodos(completedTodos.filter(i => i.name != itemname));
  }

  function onCreate(itemname) {
    setInCompleteTodos([...inCompleteTodos, {name:itemname, isComplete:false}])
  }

  function onComplete(itemname) {
    setCompletedTodos([...completedTodos, {name:itemname, isComplete:true}]);
    setInCompleteTodos(inCompleteTodos.filter(i => i.name != itemname));
  }

  return (
      <div>
        <NewToDoItem onCreate={onCreate}/>
        <TodoList 
          completedTodos={completedTodos}  
          incompleteTodos={inCompleteTodos} 
          onDelete={onDelete}
          onComplete={onComplete}
        />
      
    </div>
  )
}

export default App
