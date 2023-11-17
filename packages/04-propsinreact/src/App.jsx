import { useState } from "react";
import "./App.css";
import Card from "./Card";
import data from "../data/user";
import SingleUser from "./SingleUser";

function App() {
  const [selectCard, setSelectCard] = useState([]);
  const handleSelectedCard = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setSelectCard(data[randomIndex]);
  };
  return (
    <>
      <div className="card-main">
        {data.map((item, index) => {
          const { name, image, age } = item;
          return <Card key={index} name={name} age={age} image={image} />;
        })}
      </div>
      <button
        type="button"
        onClick={handleSelectedCard}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5"
      >
        Get Random Card
      </button>
      {selectCard && (
        <SingleUser
          name={selectCard.name}
          age={selectCard.age}
          image={selectCard.image}
        />
      )}
    </>
  );
}

export default App;
