import React, {Component} from "react"
import "./recipeForm.css"

const form = document.getElementById("recipeForm");

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.pushDataToLS = this.pushDataToLS.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  pushDataToLS(event) {
    event.preventDefault();
    const formData = {
      title: this.state.title,
      description: this.state.description
    };
    console.log(formData);
    this.props.saveToLs(formData);
    this.setState({
      title: "",
      description: ""
    })
  };

  render() {
    return (
      <div>
        <form id="recipeForm" onSubmit={this.pushDataToLS}>
          <input type="text"
                 value={this.state.title}
                 onChange={this.handleChangeTitle}
                 placeholder="Название рецепта">

          </input>
          <textarea value={this.state.description}
                    onChange={this.handleChangeDescription}
                    rows="5"
                    cols="60"
                    placeholder="Описание рецепта">

          </textarea>
          <button>Add recipe</button>
        </form>


      </div>
    )
  }
}

export default RecipeForm