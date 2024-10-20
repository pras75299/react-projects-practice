import React, { useState } from "react";

export const TodoContext = React.createContext(null);

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState([]);
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
