import React from 'react';
import FoodBox from './FoodBox.js';
import foods from '../foods.json';
import AddFood from './AddFood';

class FoodList extends React.Component {
  state = {
    foods: foods,
    active:false
  };

  addFoodHandler = (food) => {
    this.setState({
      foods: [...this.state.foods, food]
    });
  };

  changeActiveState = () => {
    this.setState({
      active:false
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.foods.map((food, index) => (
            <li key={index}>
              <FoodBox {...food} />
            </li>
          ))}
        </ul>
        <button onClick={(event)=>
          this.setState({
            active:true
          })
        }>ADD FOOD</button>
        {this.state.active && <AddFood newFood={this.addFoodHandler} changeState={this.changeActiveState}/> }
        
      </div>
    );
  }
}
export default FoodList;
