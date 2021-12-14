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

    // grab the last word
    const [lastWord] = e.target.value.split(" ").slice(-1);

    // query the autocomplete API
    if (lastWord.length > 0) {
      const autoCompleteResult = await autocomplete(
        lastWord,
        sampleSuggestions
      );

      // if there is match, set the suggestion, otherwise clear it
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

  handleSuggestion = () => {
    const { inputText, suggestion, activeSuggestion } = this.state;

    // if no suggestion is available simply return
    if (!suggestion || !activeSuggestion) return;

    // split the input
    const splittedInput = inputText.split(" ");
    // remove the last item
    splittedInput.pop();
    // add the suggestion
    splittedInput.push(suggestion);

    // set the input text back and clear suggestion box
    this.setState({
      inputText: splittedInput.join(" "),
      suggestion: "",
      activeSuggestion: false,
    });
  };

  setSuggestion = (suggestion) => {
    // Because setState is async, we need to pass a suggestion
    this.setState(
      {
        suggestion,
      },
      () => {
        this.handleSuggestion();
      }
    );
  };

  render() {
    const { activeSuggestion, inputText, suggestionsList } = this.state;
    return (
      <div className="app">
        <h1 className="title">Autocomplete app</h1>
        <div className="ui-container">
          <textarea
            className="textarea"
            name="inputText"
            onChange={this.handleChange}
            value={inputText}
          ></textarea>

          <div className="ui-suggestion-container">
            {activeSuggestion
              ? suggestionsList.map((suggestion) => (
                  <span
                    key={suggestion}
                    className="suggestion"
                    onClick={() => this.setSuggestion(suggestion)}
                  >
                    {suggestion}
                  </span>
                ))
              : null}
          </div>
        </div>

        <div className="suggestions-container">
          <h2 className="suggestions-title">Available suggestions</h2>
          {sampleSuggestions ? (
            <ul className="suggestions-list">
              {sampleSuggestions.map((suggestion) => (
                <li key={suggestion}>{suggestion}</li>
              ))}
            </ul>
          ) : (
            <p>Loading suggestions..</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
