import { createStore } from "redux";
import flightBookReducer from "./flightBook/flightBookReducer";

const store = createStore(flightBookReducer);

export default store;
