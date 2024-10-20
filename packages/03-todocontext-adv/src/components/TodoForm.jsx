import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

function TodoForm() {
  const todocontext = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");
  const handleTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      todocontext.setTodo([...todocontext.todo, { name: inputValue }]);
      setInputValue("");
    }
  };
  return (
    <form className="flex">
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
        onClick={handleTodo}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
