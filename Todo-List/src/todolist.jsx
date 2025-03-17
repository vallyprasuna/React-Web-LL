import { useContext } from 'react';
import TodoListItem from './todolistitem';
import { ListContext } from './ToDoContextProvider';
export default function TodoList() {
    const { completedTodos, inCompleteTodos } = useContext(ListContext);
    return (
        <div>
          <h1>My Todos</h1>
          <div style={{display:'flex'}}>
            <div>
                <h3>Completed ToDos</h3>
                {completedTodos[0].map((item, index) => (
                    <TodoListItem 
                        key={index}
                        item={item}
                    />
                ))}
            </div>
            <div>
                <h3>Incomplete ToDos</h3>
                {inCompleteTodos[0].map((item, index) => (
                    <TodoListItem 
                        key={index}
                        item={item}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}