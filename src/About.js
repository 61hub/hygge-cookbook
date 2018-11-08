import React, {Component} from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class About extends Component {
  render() {
    return(
      <div>
        <Link to="/">Homepage</Link>
        <h1>Это книга рецептов. Автор идеии Лялечкевич и её учитель всея руси Мифа</h1>
      </div>
    )
  }
}
export default About