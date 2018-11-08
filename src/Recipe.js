import React, { Component } from "react"


class Recipe extends Component {
  render(){
    return(
    <div className="recipe">
      {this.props.recipeData == null ? "" : <div><h1>{this.props.recipeData.title}</h1> <p>{this.props.recipeData.description}</p></div>}
      </div>
    )
  }
}
export default Recipe

