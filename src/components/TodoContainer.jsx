import React, { useState } from "react";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodosList from "./TodoList";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import NotMatch from "./NotMatch";
import Navbar from "./Navbar";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  return (
    <>
    <Navbar/>
    <Routes>
      <Route
        path="/" exact 
        element={
          <div className="container">
            <div className="inner">
              <Header />
              <TodoInput addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        }
      />
      <Route path="/about/*" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
    </>
  );
};

export default TodoContainer;
