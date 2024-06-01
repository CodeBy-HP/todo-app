import { createStore } from "redux";
import todoReducer from "./reducers";


// Creating the Redux store with the todoReducer and DevTools integration
const store = createStore(todoReducer);

export default store; // Exporting the created Redux store
