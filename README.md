# Autcomplete app
This is a simple autocomplete app that autocompletes the last word that a user types inside a textarea element.

The app consists of a single component, `App.js`, there's also additional `api.js` file that contains the async "autocomplete" function.

As per the [instructions](INSTRUCTIONS.md) only JavaScript was used to write this app. 

## Quick start
Project was bootrstraped with [`create-react-app`](https://create-react-app.dev/)

- Clone this repo:
```
git clone https://github.com/jmmarco/deel-auto-complete.git
```

There are currently two branches available:
- `master` -> A class component that uses a static JSON file for suggestions
- `class-component-read-api` -> A class component that uses dynamic suggestions using an external read API

- Install all dependencies from within the project directory using `yarn install` or `npm install`
- Run the application using `yarn start` or `npm start`

### Functionality and limitations

To use the app, start typing text in the visible textarea element, the app will lookup possible matches once two or more characters are entered, if a match is available, you'll see it appear below the textarea in a light blue color, click on the suggested word to accept it.

To make it easy to test a list of available suggested words is provided as well.

In order to keep things simple, the app only autocompletes the last item that was typed into the `<textarea>` element. Additional functionality to edit the user input was explored using the `keyUp` and `keyDown` event listeners, but will take more time than the alloted 120 minutes to implement a proper working prototype. Happy to discuss the details if required.


