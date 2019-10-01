import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//EXAMPLE
/*
//const store = createStore(reducer);

// STORE -> Global State!

// ACTION -> What you want to do!
const increment = () => {
	return {
		type: "INCREMENT"
	};
};

const decrement = () => {
	return {
		type: "DECREMENT"
	};
};

// REDUCER -> Modifies the state, based on what action is called!
const counter = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
	}
};

// Save it in the Store
const store = createStore(counter);

// Display it on the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH -> Where the action is executed!
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
