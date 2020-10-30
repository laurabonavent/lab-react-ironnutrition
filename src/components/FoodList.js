import React from 'react';
import FoodBox from './FoodBox.js';
import foods from '../foods.json';
import AddFood from './AddFood';

class FoodList extends React.Component {
  state = {
    foods: foods,
    active: false,
    searchContent: '',
  };

  addFoodHandler = (food) => {
    this.setState({
      foods: [...this.state.foods, food],
    });
  };

  changeActiveState = () => {
    this.setState({
      active: false,
    });
  };

  searchFood = (event) => {
    this.setState({
      searchContent: event.target.value,
    });
  };

  render() {
    // filtrer search
    let foods = this.state.foods;
    let searchContent = this.state.searchContent;
    if (searchContent) {
      foods = foods.filter((el) => el.name.includes(searchContent));
    }
    //add food to today's foods
    //name, cal, image
      //search index of food selected
      //print in li of today's foods
    console.log(this.state.foods[0].name);

    //quantity

    return (
      <div>
        {/* Searchbar */}
        <input
          className="navbar"
          type="text"
          name="search"
          value={this.state.SearchContent}
          onChange={this.searchFood}
        />
        <div className="content">
          <div>
            {/* liste de foods */}
            <ul>
              {foods.map((food, index) => (
                <li key={index}>
                  <FoodBox {...food} />
                </li>
              ))}
            </ul>
            <button
              onClick={(event) =>
                this.setState({
                  active: true,
                })
              }
            >
              ADD FOOD
            </button>
            {this.state.active && (
              <AddFood
                newFood={this.addFoodHandler}
                changeState={this.changeActiveState}
              />
            )}
          </div>
          <div>
            <h1>Today's FoodList</h1>
            <ul></ul>
            <p>Total : {} cal</p>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodList;
