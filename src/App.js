import React, {Component} from "react"
import Recipe from "./Recipe";
import RecipeForm from "./RecipeForm"

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      recipeData: JSON.parse(localStorage.getItem("formData"))
    }

  }
  render () {
    const saveToLs = (formData) => {
      localStorage.setItem("formData", JSON.stringify(formData));
      this.setState({recipeData: formData});
    };

    return(
      <div>
        <Recipe recipeData={this.state.recipeData} />
        <RecipeForm saveToLs={saveToLs} />
      </div>
    )
  }
}
export default App