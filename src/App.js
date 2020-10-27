import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox'


function App() {
  const food = {
    image: 'https://i.imgur.com/eTmWoAN.png',
    name: 'Pizza',
    calories: '400',
    quantity: '1',
  };

  return (
    <div className="App">
      <FoodBox {...food}/>
    </div>
  );
}

export default App;
