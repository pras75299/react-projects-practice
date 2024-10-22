import React, { useState, createContext } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  // Add a new todo
  const addTodo = (todoMessage) => {
    const newTodo = {
      id: Date.now(), // Unique ID for each todo
      name: todoMessage,
      completed: false,
      isEditable: false,
    };
    setTodo([...todo, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todo, setTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
