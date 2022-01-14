import React, { useState, useEffect } from "react";
import classes from "./ToDoJS.module.css";

const ToDoJS = () => {
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
    console.log("in JS submit");

    if (toDoInput.length === 0 || toDoInput.length === 1) {
      return;
    }

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
    <div className={classes.reviewForm}>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputChangeHandler} value={toDoInput} />
        <button type="submit" className={classes.toDoBtn}>
          {" "}
          Add Review Note{" "}
        </button>
      </form>

      <div className={classes.toDoList}>
        {toDos.map((todo) => (
          <div className={classes.toDoText} key={todo.id}>
            {toDoEditing === todo.id ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
              />
            ) : (
              <div className={classes.toDoItem}> {todo.text} </div>
            )}

            <div className={classes.toDoButtonsContainer}>
              <button onClick={() => removeToDoItem(todo.id)}>
                {" "}
                Remove Note{" "}
              </button>

              {toDoEditing === todo.id ? (
                <button onClick={() => editToDo(todo.id)}>Submit Edits</button>
              ) : (
                <button
                  onClick={() => {
                    setToDoEditing(todo.id);
                  }}
                >
                  Edit Note
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoJS;
