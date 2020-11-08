import React from 'react';
import FoodBox from './FoodBox.js';
import foods from '../foods.json';
import AddFood from './AddFood';
import FoodInCart from './FoodInCart';

class FoodList extends React.Component {
  state = {
    foods: foods, //pour que notre liste de food soit dynamique
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

  //fonction pour récupérer le food clické et le mettre dans le state foodCart (affichage dans le panneau de droite)
  addToday = (foodClicked, quantity) => {
    let newFoodCart = {
      name: foodClicked.name,
      quantity: quantity.quantity,
      calories: foodClicked.calories,
    };
    this.setState({ foodCart: [...this.state.foodCart, newFoodCart] });
  };

  //fonction pour retirer une ligne du cart au click sur delete
  handleDelete = (name) => {
    //copier l'array source
    let foodCartCopy = [...this.state.foodCart];
    //chercher l'élément de l'array qui comporte ce nom
    let foodIndex = foodCartCopy.findIndex((food) => food.name === name);
    //supprimer cet élément du foodCart
    foodCartCopy.splice(foodIndex, 1);
    //changer le state
    this.setState({ foodCart: foodCartCopy });
  };

  render() {
    //boucle pour calculer la somme des cal du cart
    let foodCart = this.state.foodCart;
    console.log(foodCart);
    let calArr = [];
    let totalCal = 0;
    let calInCart = 0;
    for (let i = 0; i < foodCart.length; i++) {
      totalCal = foodCart[i].calories * foodCart[i].quantity;
      //ajouter les cal du food dans l'array
      calArr.push(totalCal);
      //sommer ce nouvel el avec le 1er (qui est la somme)
      calInCart = calArr.reduce((acc, val) => acc + val);
      console.log('calInCart', calInCart);
    }

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
            {/* si le state active est true alors add food et le form apparait */}
            {this.state.active && (
              <AddFood
                newFood={this.addFoodHandler}
                changeState={this.changeActiveState}
              />
            )}
          </div>
          <div>
            <h1>Today's FoodList</h1>
            {/* pour Antoine ANOMALIE EN CONSOLE - doublon des apparitions en console mais pas en rendu  */}
            {/* Renvoyer les propriétés de la FoodBox cliquée, en imprimant le state foodcart mappé */}
            <ul>
              {foodCart.map((cartFood) => (
                <FoodInCart
                  key={cartFood.name}
                  name={cartFood.name}
                  quantity={cartFood.quantity}
                  foodToDelete={() => this.handleDelete(cartFood.name)}
                  calories={cartFood.calories}
                />
              ))}
            </ul>

            <p>
              Total :{calInCart}
              cal
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodList;
