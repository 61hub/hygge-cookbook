import React, { Component } from "react"


class Recipe extends Component {
  render(){
    const recipeData = JSON.parse(localStorage.getItem("formData"));
    console.log(recipeData);
    return(
    <div>
      {recipeData == null ? "" : <div><h1>{recipeData.title}</h1> <p>{recipeData.description}</p></div>}
      </div>
    )
  }
}
export default Recipe

