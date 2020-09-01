import React from "react"

class PizzaForm extends React.Component {
  
  render(){
    console.log(this.props.singlePizzaInfo)
    const { topping, size, vegetarian} = this.props.singlePizzaInfo
    return(
      <form onSubmit={this.props.handleSubmit}>
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" onChange={this.props.editedTopping} value={topping}/>
        </div>
        <div className="col">
          <select className="form-control" onChange={this.props.editedSize} value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col"> 
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian? true : false} onChange={this.props.editedVeg}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={this.props.editedVeg} checked={vegetarian? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </div>
      </form>

  )}
}

export default PizzaForm
