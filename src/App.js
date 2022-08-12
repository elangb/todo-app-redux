import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoActions, EditTodoActions, RemoveTodoActions,  } from "./actions/TodoActions";
import "./App.css";
function App() {

  // digunakan untuk mengambil data dari redux  
  const [todo, setTodo] = useState([]);


  // mengambil data dari redux
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state);
  const data = Todo.todos;
  // console.log(data);

  // untuk menambahkan todo
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoActions(todo));
  };


  // untuk menghapus todo
  const removeHandler = (i) => {
    dispatch(RemoveTodoActions(i));
  }

  const handleChange = (todo, index) => {
    dispatch(EditTodoActions(todo, index));
  }

  return (
    <div className="container" >
      <div className="app_wrapper">
        <header className="header">
          <h1>Todo App Redux</h1>
        </header>
        <form onSubmit={handleSubmit} >
          <input
            className="task-input"
            placeholder="Add Todo..."
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="button-add" type="submit">
            Add
          </button>
        </form>
        <ul>
          {data.map((el, index) => {
            return (
              <li className="list-item" key={index}>
                {el}
                <button className="button-delete" onClick={()=>removeHandler(index)}>
                <i className="fa-solid fa-trash-can"></i>
                </button>
                <button className="button-edit" onClick={()=> handleChange(todo, index)}>
                <i className="far fa-edit"></i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
