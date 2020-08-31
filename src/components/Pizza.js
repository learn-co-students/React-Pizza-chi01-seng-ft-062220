import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizzaData.topping}</td>
      <td>{props.pizzaData.size}</td>
      <td>{props.pizzaData.vegetarian ? "true" : "false"}</td>
      <td><button onClick={() => props.handleEdit(props.pizzaData)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
