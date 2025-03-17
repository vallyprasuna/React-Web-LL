import { ListProvider } from './ToDoContextProvider';
import './App.css'
import TodoList from './todolist';
import NewToDoItem from './newtodoitem';

function App() {

  return (
      <ListProvider>
        <NewToDoItem/>
        <TodoList />
    </ListProvider>
  )
}

export default App
