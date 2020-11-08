import React from 'react';

function FoodInCart(props) {
  return (
    <li >
      {props.quantity} {props.name} ={props.calories * props.quantity}
      calories
      {/* delete boutton pour retirer une ligne du cart */}
      <button name={props.name} onClick={props.foodToDelete}>
        Delete
      </button>
    </li>
  );
}

export default FoodInCart;
