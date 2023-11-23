import { useState } from "react";
import "./App.css";
import data from "./assets/toursdata";
import Tour from "./components/Tour";
function App() {
  const [tours, setTours] = useState(data);
  const removeTour = (id) => {
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    );
  };
  return (
    <>
      <h1 className="text-4xl text-blue-500 text-center my-3 font-bold underline pb-2">
        Tours
      </h1>
      <div className="card-main">
        {tours.map((item) => {
          const { id, name, info, image, price } = item;
          return (
            <Tour
              key={id}
              name={name}
              info={info}
              image={image}
              price={price}
              removeTour={() => removeTour(id)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
