import { createStore } from "redux";
import todoReducer from "./reducers";
import { composeWithDevTools } from '@redux-devtools/extension';// Importing composeWithDevTools from redux-devtools-extension

// Creating the Redux store with the todoReducer and DevTools integration
const store = createStore(todoReducer, composeWithDevTools());

export default store; // Exporting the created Redux store
