import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("Adding this todo", title, desc);
    var sno =
      !todos || todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    var myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodo([...todos, myTodo]);
  };
  const [todos, setTodo] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App padding-3">
      <Router>
        <Header title="Todo List" searchbar={true} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={ <About/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
