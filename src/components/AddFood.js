import React from "react"; 

const initialState = {
  name: '',
  calories: '',
  image:''
}

class AddFood extends React.Component {
  state = initialState

  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]:value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.newFood(this.state)
    this.props.changeState()
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Name
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          </label>
          <label>
            Calories
            <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange}/>
          </label>
          <label>
            Image url
            <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
          </label>
          <button >Submit</button>
        </form>
      </div>
    )
  }
}

export default AddFood;