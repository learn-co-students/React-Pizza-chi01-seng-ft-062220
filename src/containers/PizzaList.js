import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  constructor () {
    super()
  }


  renderPizzas = () => {
    return this.props.pizzas.map((pizzaObj) => {
      return <Pizza handleEdit={this.props.handleEdit} pizzaData={pizzaObj}/>

    })
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPizzas()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
