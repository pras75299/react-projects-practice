import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

function TodoItem() {
  const todocontext = useContext(TodoContext);
  console.log("Todo Context:", todocontext);

  if (!todocontext || !todocontext.todo.length) {
    return <p>No todos available</p>;
  }

  return (
    <>
      {todocontext.todo.map((item, index) => {
        return (
          <li key={index} className="bg-white text-black p-2 rounded mb-2">
            {item.name}
          </li>
        );
      })}
    </>
  );
}

export default TodoItem;
