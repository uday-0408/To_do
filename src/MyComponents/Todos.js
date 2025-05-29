import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  var todos = props.todos;
  let myStyle = {
    minHeight: "70vh",
    margin: "30px auto",
    padding: "10px",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
  }
  return (
    <div style={myStyle}>
      <h1>Todo List</h1>
      {todos.length === 0
        ? "No todos to display"
        : todos.map((todo) => {
            return <>
             <TodoItem todos={todo} onDelete={props.onDelete} />
             <hr />
             </>
          })}
    </div>
  );
}
