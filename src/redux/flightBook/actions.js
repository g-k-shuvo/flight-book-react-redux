import { FLIGHT_ADD, FLIGHT_DELETE, FLIGHT_REMOVE } from "./actionTypes";

export const flightAdd = (value) => {
  return {
    type: FLIGHT_ADD,
    payload: value,
  };
};

export const flightRemove = (value) => {
  return {
    type: FLIGHT_REMOVE,
    payload: value,
  };
};
