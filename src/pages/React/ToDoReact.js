import React, { useState, useEffect } from "react";

const ToDoReact = (props) => {
  // TODO consider using useReducer
  const [toDos, setToDos] = useState([]);
  const [toDoInput, setToDoInput] = useState(" ");
  const [toDoEditing, setToDoEditing] = useState(null);
  const [editingText, setEditingText] = useState(" ");

  // retrieve the local storage saved todo items
  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedToDos = JSON.parse(temp);

    if (loadedToDos) {
      setToDos(loadedToDos);
    }
  }, []);

  // using local storage to save todo items
  useEffect(() => {
    const toDoListSaved = JSON.stringify(toDos); // turns any JS into JSON
    localStorage.setItem("todos", toDoListSaved);
  }, [toDos]);

  const inputChangeHandler = (e) => {
    setToDoInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newToDo = {
      id: new Date().getTime(),
      text: toDoInput,
      completed: false,
    };

    setToDos([...toDos].concat(newToDo));
    setToDoInput(" ");
  };

  const removeToDoItem = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);

    setToDos(updatedToDos);
  };

  const toggleComplete = (id) => {
    const updatedToDos = [...toDos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed; //toggles the todo item true or false
      }

      return todo; // returns every todo
    });

    setToDos(updatedToDos);
  };

  const editToDo = (id) => {
    const updatedToDos = [...toDos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo; // returns every todo
    });
    setToDos(updatedToDos);
    setToDoEditing(null);
    setEditingText(" ");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputChangeHandler} value={toDoInput} />
        <button type="submit"> Add </button>
      </form>

      {toDos.map((todo) => (
        <div key={todo.id}>
          {toDoEditing === todo.id ? (
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
          ) : (
            <div> {todo.text} </div>
          )}

          <button onClick={() => removeToDoItem(todo.id)}> Remove </button>
          <input
            type="checkbox"
            onChange={() => toggleComplete(todo.id)}
            checked={todo.completed}
          />

          {toDoEditing === todo.id ? (
            <button onClick={() => editToDo(todo.id)}> Submit Edits </button>
          ) : (
            <button
              onClick={() => {
                setToDoEditing(todo.id);
              }}
            >
              Edit To Do
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDoReact;
