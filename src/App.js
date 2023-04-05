import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['dog', 'cat', 'cow', 'gator', 'bird', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}
console.log(getRandomAnimal());

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderedAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div> {renderedAnimal} </div>
    </div>
  );
}

export default App;
