import React, { Component } from "react"

class InputTodo extends Component {
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  }
  state = {
    title: "t"
  };
  render() {
    return (
      <form className="form-container">
        <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={this.state.title}
        onChange={this.onChange}
        name="title"
        />
        <input 
        className="input-submit"
        onClick={this.handleSubmit}
        type="submit" 
        value="Submit" />
      </form>
    )
  }
}
export default InputTodo
