import React from 'react';
import FoodBox from './FoodBox.js';
import foods from '../foods.json';

class FoodList extends React.Component {
  state = {
    foods: foods,
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.foods.map((food, index) => (
            <li key={index}>
                <FoodBox {...food}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default FoodList;
