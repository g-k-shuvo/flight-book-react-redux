import { FLIGHT_ADD, FLIGHT_REMOVE } from "./actionTypes";

const initialState = {
  flights: [],
};

const flightBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_ADD:
      return {
        ...state,
        flights: [...state.flights, action.payload],
      };
    case FLIGHT_REMOVE:
      return {
        ...state,
        flights: state.flights.filter((flight) => flight.id !== action.payload),
      };

    default:
      return state;
  }
};

export default flightBookReducer;
