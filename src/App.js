import React, {Component} from "react"
import Recipe from "./Recipe";
import RecipeForm from "./RecipeForm"
import "./index.css"
import About from "./About";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);
    let recipeData = JSON.parse(localStorage.getItem("formData"));
    recipeData = (recipeData == null) ? [] : recipeData;

    this.state = {
      recipeData: recipeData
    }

  }

  render() {
    const saveToLs = (formData) => {
      const newRecipeData = this.state.recipeData;
      console.log(newRecipeData);
      newRecipeData.push(formData);
      this.setState({recipeData: newRecipeData});
      localStorage.setItem("formData", JSON.stringify(newRecipeData));
    };

    return (
        <div>
          <Link to="/about/">About</Link>
          {this.state.recipeData.map((recipe) => <Recipe recipeData={recipe}/>)}
          <RecipeForm saveToLs={saveToLs}/>
        </div>
    )
  }
}

export default App