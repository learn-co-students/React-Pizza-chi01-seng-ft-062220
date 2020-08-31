import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor () {
    super()
    this.state = {
    pizzas: [],
    formPizza: {topping: "topping", size: "size"}
    }
  }
  
  
  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(pizzas => 
        this.setState({pizzas: pizzas}));
  }
  
  
  handleEdit = (pizzaObj) => {
    // this.setState({
    //   formPizza: {
    //     topping: pizzaObj.topping,
    //     size: pizzaObj.size,
    //     vegetarian: pizzaObj.vegetarian,
    //     id: pizzaObj.id
    //   }
      this.setState({
        cats: 'dogs'
      })
      console.log(this.state)
    }
   
  

  handleSubmit = (id) => {
    const pizzaObj= {
      topping: this.state.formPizza.topping,
      size: this.state.formPizza.size,
      id: id
    }
    
    const reqObj = {
      method: 'PATCH',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(pizzaObj)
    }
    
    fetch(`http://localhost:3000/pizzas/${pizzaObj.id}`, reqObj)
      .then(res => res.json())
      .then(data => this.componentDidMount());
    
    //scrape data
    //patch request for specific pizza
    //resetting form values
    //refresh dom--setState w/ edited pizza
  }

  handleTopping = (event) => {
    this.setState({
      formPizza: {
        topping: event.target.value
  }})}
    
    
   handleSize= (event) => {
    this.setState({
      formPizza: {
        size: event.target.value
  }})}


  // handleVege= (event) => {
  //   this.setState({
  //     formPizza: {
  //       vegetarian: event.target.value
  // }})}


  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm formPizza={this.state.formPizza} handleSubmit={this.handleSubmit} handleTopping={this.handleTopping} handleSize={this.handleSize} handleVege={this.handleVege}/>
        <PizzaList handleEdit={this.handleEdit} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
