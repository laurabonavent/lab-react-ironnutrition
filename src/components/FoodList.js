import React from 'react';
import FoodBox from './FoodBox.js';
import foods from '../foods.json';
import AddFood from './AddFood';

class FoodList extends React.Component {
  state = {
    foods: foods,
    active: false,
    searchContent: '',
    foodCart: [],
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

  //fonction pour récupérer le food clické et le mettre dans le state foodCart
  addToday = (foodClicked, quantity) => {
    let newFoodCart = {
      name: foodClicked.name,
      quantity: quantity.quantity,
      calories: foodClicked.calories,
    };
    this.setState({ foodCart: [...this.state.foodCart, newFoodCart] });
  };

  totaCalories = (foodCart) => {};

  render() {
    let foodCart = this.state.foodCart;
    let calArr = [];

    // filtrer search
    let foods = this.state.foods;
    let searchContent = this.state.searchContent;
    if (searchContent) {
      foods = foods.filter((el) => el.name.includes(searchContent));
    }
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
                  <FoodBox key={index} addToCart={this.addToday} {...food} />
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
            {/* renvoyer les propriétés de la FoodBox cliquée, en imprimant le state foodcart mappé */}
            <ul>
              {foodCart.map((cartFood) => (
                <li key={cartFood.name}>
                  {cartFood.quantity} {cartFood.name} =
                  {cartFood.calories * cartFood.quantity}
                  calories
                </li>
              ))}
            </ul>

            <p>
              Total :
              {foodCart.map((cartFood) => {
                let totalCal = cartFood.calories * cartFood.quantity;
                calArr.push(totalCal);
                let finalArr = calArr.reduce((acc, val) => acc + val);
                console.log('finalArr', finalArr);

                return finalArr;
              })}
              cal
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodList;
