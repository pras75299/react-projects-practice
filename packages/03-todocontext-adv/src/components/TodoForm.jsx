import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

function TodoForm() {
  const { addTodo } = useContext(TodoContext); // Get addTodo from context
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue); // Add new todo
      setInputValue(""); // Clear input field
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
