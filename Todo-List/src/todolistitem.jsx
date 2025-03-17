import { useContext } from 'react';
import { ListContext } from './ToDoContextProvider';
export default function TodoListItem({item}) {
    const { onDelete, onComplete } = useContext(ListContext);
    return (
        <div>
          <h4>{item.name}</h4>
          { 
            item.isComplete ? 
            <button onClick={() => onDelete(item.name)}>Delete</button> :
            <button onClick={() => onComplete(item.name)}>Mark as Complete</button>
            }
        </div>
    )
}