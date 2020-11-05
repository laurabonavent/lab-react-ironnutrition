import React from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends React.Component {
  //state pour quantité uniquement car dynamique (input)
  state = {
    quantity: 0,
  };

  changeQuantity = (event) => {
    this.setState({ quantity: event.target.value });
  };

  //aliment à ajouter sous forme d'objet avec name et cal
  // addToday = () => {
  //   let FoodToAdd = {
  //     name: this.props.name,
  //     calories: this.props.calories,
  //     quantity: this.state.quantity,
  //   };
  //   console.log(FoodToAdd);
  //   return FoodToAdd;
  // };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  //pour récupérer le contenu de l'input et l'envoyer dans le state
                  value={this.props.children}
                  onChange={this.changeQuantity}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    //faire passer les props et state de Foodbox dans la méthode de FoodList
                    this.props.addToCart(this.props, this.state);
                  }}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
