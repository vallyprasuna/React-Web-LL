import TodoListItem from './todolistitem';
export default function TodoList({completedTodos, incompleteTodos, onComplete, onDelete}) {
    return (
        <div>
          <h1>My Todos</h1>
          <div style={{display:'flex'}}>
            <div>
                <h3>Completed ToDos</h3>
                {completedTodos.map((item, index) => (
                    <TodoListItem 
                        key={index}
                        item={item}
                        onCompleteClicked={onComplete}
                        onDeleteClicked={onDelete}
                    />
                ))}
            </div>
            <div>
                <h3>Incomplete ToDos</h3>
                {incompleteTodos.map((item, index) => (
                    <TodoListItem 
                        key={index}
                        item={item}
                        onCompleteClicked={onComplete}
                        onDeleteClicked={onDelete}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}