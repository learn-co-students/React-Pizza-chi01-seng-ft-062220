import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor(){
    super();
    this.state={
      pizzas: [],
      singlePizza: {
        id: '',
        topping: '',
        size: '',
        vegetarian: null
      }
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pizzas`)
      .then(response => response.json())
        .then(pizzaData => this.setState({
          pizzas: pizzaData
        }))
  }

  pizzaInfo = (info) => {
    this.setState({
      singlePizza: {
        id: info.id,
        topping: info.topping,
        size: info.size,
        vegetarian: info.vegetarian
      }
    })
  }

  editedPizzaTopping = event =>{
    console.log(event.target.value)
    this.setState({
      singlePizza:{
        ...this.state.singlePizza,
        topping: event.target.value
      }
    })
  }

  editedPizzaSize = event =>{
    console.log(event.target.value)
    this.setState({
      singlePizza:{
        ...this.state.singlePizza,
        size: event.target.value
      }
    })
  }

  editedVegetarian = event => {
    let selected = (event.target.value === 'Vegetarian' ? true : false)
    this.setState({
      singlePizza:{
        ...this.state.singlePizza,
        vegetarian: selected
      }
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    let updatedPizza = this.state.singlePizza
    console.log(updatedPizza.id)
    const reqObj = {
      method: 'PATCH',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        "topping": this.state.singlePizza.topping,
        "size": this.state.singlePizza.size,
        "vegetarian": this.state.singlePizza.vegetarian
      })
    }

    fetch(`http://localhost:3000/pizzas/${updatedPizza.id}`, reqObj)
      .then(response => response.json())
        .then(pizzaData => { 
          let allPizzas = this.state.pizzas
          let oldPizza = allPizzas.find(pizza => pizza.id === pizzaData.id)
          let index = allPizzas.indexOf(oldPizza)
          allPizzas.splice(index, 1, pizzaData)
          this.setState({
            pizzas: allPizzas
          })
        })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm singlePizzaInfo={this.state.singlePizza} editedTopping={this.editedPizzaTopping} editedSize={this.editedPizzaSize} editedVeg={this.editedVegetarian} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzaList={this.state.pizzas} editPizza={this.pizzaInfo}/>
      </Fragment>
    );
  }
}

export default App;
