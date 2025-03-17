import React, { createContext, useState } from 'react';
const ListContext = createContext({
    completedTodos: [],
    inCompleteTodos: [],
    setCompletedTodos: () => {},
    setInCompleteTodos: () => {},
    onComplete: () => {},
    onDelete: () => {},
    onCreate: () => {}
});

const ListProvider = ({ children }) => {
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
        <ListContext.Provider
            value={{
                completedTodos: [completedTodos, setCompletedTodos],
                inCompleteTodos: [inCompleteTodos, setInCompleteTodos],
                onComplete: onComplete,
                onDelete: onDelete,
                onCreate: onCreate
            }}
        >
            {children}
        </ListContext.Provider>
    );

}

export { ListContext, ListProvider}