import { useState, useContext } from 'react';
import { ListContext } from './ToDoContextProvider';

export default function NewToDoItem() {
    const { onCreate } = useContext(ListContext);
    const [inputText, setInputText] = useState("");
    return (
        <div>
          <input name="new" type="text" value={inputText} onChange={e => setInputText(e.target.value)}></input>
          <button onClick={()=> {
            onCreate(inputText);
            setInputText("");
          }}>Add New ToDO</button>
        </div>
    )
}