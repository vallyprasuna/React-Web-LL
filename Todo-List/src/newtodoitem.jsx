import { useState } from 'react';
export default function NewToDoItem({onCreate}) {
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