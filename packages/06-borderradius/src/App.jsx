import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("0");
  const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.trim() !== "") {
      setInputValue(value);
    } else if (value.trim() === "") {
      setInputValue("");
    }
  };
  const formattedCss =
    inputValue === 0 ? "0" : `border-radius: ${inputValue}px;`;

  return (
    <section className="text-center bg-lime-50 h-screen">
      <h1 className="text-4xl text-grey-500 text-center font-bold py-3">
        Border radius application
      </h1>
      <div className="box" style={{ borderRadius: `${inputValue}px` }}>
        <pre>
          <code>{formattedCss}</code>
        </pre>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Put any border radius value"
      />
    </section>
  );
}

export default App;
