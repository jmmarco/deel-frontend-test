import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    inputText: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Autocomplete app</h1>
        <div>{JSON.stringify(this.state)}</div>
        <div className="ui-container">
          <textarea className="textarea" name="inputText" onChange={this.handleChange} value={this.state.inputText}></textarea>
        </div>
      </div>
    );
  }
}

export default App;
