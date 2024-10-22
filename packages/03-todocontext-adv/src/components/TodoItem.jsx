import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

function TodoItem() {
  const { todo, setTodo } = useContext(TodoContext);

  // Toggle completed status for a todo
  const toggleCompleted = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Save the edited todo message and set it to readonly
  const saveTodo = (id, newMessage) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, name: newMessage, isEditable: false } : item
      )
    );
  };

  // Toggle the editable state for a todo
  const toggleEditable = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isEditable: !item.isEditable } : item
      )
    );
  };

  // Delete a single todo
  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <ul className="w-full">
      {todo.map((item) => {
        // Controlled input value for editing
        const handleChange = (e) => {
          setTodo(
            todo.map((todoItem) =>
              todoItem.id === item.id
                ? { ...todoItem, name: e.target.value }
                : todoItem
            )
          );
        };

        return (
          <li key={item.id} className="mb-3">
            <div
              className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                item.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
              }`}
            >
              {/* Checkbox for marking todo as completed */}
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={item.completed}
                onChange={() => toggleCompleted(item.id)}
              />

              {/* Todo text input field (editable or read-only based on isEditable) */}
              <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                  item.isEditable
                    ? "border-black/10 px-2"
                    : "border-transparent"
                } ${item.completed ? "line-through" : ""}`}
                value={item.name}
                onChange={handleChange} // Update the todo message as the user types
                readOnly={!item.isEditable} // Editable only when isEditable is true
              />

              {/* Edit/Save Button */}
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                  if (item.isEditable) {
                    saveTodo(item.id, item.name); // Save and set to readonly
                  } else {
                    toggleEditable(item.id); // Enable editing
                  }
                }}
                disabled={item.completed}
              >
                {item.isEditable ? "📁" : "✏️"}
              </button>

              {/* Delete Button */}
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(item.id)}
              >
                ❌
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoItem;
