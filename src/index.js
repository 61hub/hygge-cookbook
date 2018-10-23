import React from "react"
import ReactDOM from "react-dom";
import Recipe from "./Recipe";

import { recipe } from "./staticData"

const mapedRecipe = recipe.map(
  (recipe) => <Recipe title={recipe.title} description={recipe.description} />
);

const container = document.querySelector("#container");

ReactDOM.render(
  mapedRecipe,
  container
);