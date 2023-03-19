import './App.css';
import { useState } from 'react';
import Animal from './Animal';

function getRandomAnimal() {
  const animals = ['cat', 'dog', 'cow', 'horse', 'gator', 'bird'];
  const randomIndex = Math.floor(Math.random() * animals.length);

  return animals[randomIndex];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <Animal type={animal} key={index} />
  ));

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
