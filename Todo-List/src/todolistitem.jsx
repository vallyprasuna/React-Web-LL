export default function TodoListItem({item, onCompleteClicked, onDeleteClicked}) {
    return (
        <div>
          <h4>{item.name}</h4>
          { 
            item.isComplete ? 
            <button onClick={() => onDeleteClicked(item.name)}>Delete</button> :
            <button onClick={() => onCompleteClicked(item.name)}>Mark as Complete</button>
            }
        </div>
    )
}