import "./App.css";
import React from "react";
import sampleSuggestions from "./utils/sampleSuggestions.json";
import autocomplete from "./utils/api";

class App extends React.Component {
  state = {
    activeSuggestion: false,
    inputText: "",
    sampleSuggestions: [],
    suggestions: "",
    suggestionsList: [],
  };

  componentDidMount() {
    this.setState({
      sampleSuggestions,
    });
  }

  handleChange = async (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    const [lastWord] = e.target.value.split(" ").slice(-1);

    if (lastWord.length > 0) {
      const autoCompleteResult = await autocomplete(
        lastWord,
        sampleSuggestions
      );

      console.log('autocomplete', autoCompleteResult)

      autoCompleteResult
      ? this.setState({
          suggestionsList: autoCompleteResult,
          activeSuggestion: true,
          lastWord,
        })
      : this.setState((state) => {
          return {
            suggestion: "",
            suggestionsList: [],
            activeSuggestion: false,
            lastWord: "",
          };
        });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Autocomplete app</h1>
        <div>{JSON.stringify(this.state)}</div>
        <div className="ui-container">
          <textarea
            className="textarea"
            name="inputText"
            onChange={this.handleChange}
            value={this.state.inputText}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default App;
