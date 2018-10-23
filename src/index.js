import React from "react"
import ReactDOM from "react-dom";
import Recipe from "./Recipe";

import { recipes } from "./staticData"

const mapedRecipe = recipes.map(
  (recipe) => <Recipe title={recipe.title} description={recipe.description} />
);

const container = document.querySelector("#container");

ReactDOM.render(
  mapedRecipe,
  container
);