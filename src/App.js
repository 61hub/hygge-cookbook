import React, {Component} from "react"
import Recipe from "./Recipe";
import RecipeForm from "./RecipeForm"

class App extends Component {
  render () {
    return(
      <div>
        <Recipe />
        <RecipeForm />
      </div>
    )
  }
}
export default App