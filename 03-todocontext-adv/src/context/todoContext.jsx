import React from "react";

export const TodoContext = React.createContext({
  createtodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  getTodos: () => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
