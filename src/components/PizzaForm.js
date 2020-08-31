import React from "react"


const PizzaForm = (props) => {



  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder={props.formPizza.topping} onChange={props.handleTopping} value={
                null
              }/>
        </div>
        <div className="col">
          <select value={props.formPizza.size} onChange={props.handleSize} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleVege} type="radio" value="Vegetarian" checked={props.formPizza.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleVege} type="radio" value="Not Vegetarian" checked={props.formPizza.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.handleSubmit(props.formPizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
