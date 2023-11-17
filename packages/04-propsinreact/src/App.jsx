import "./App.css";
import Card from "./Card";
import data from "../data/user";

function App() {
  return (
    <>
      <div className="card-main">
        {data.map((item, index) => {
          const { name, image, age } = item;
          return <Card key={index} name={name} age={age} image={image} />;
        })}
      </div>
    </>
  );
}

export default App;
