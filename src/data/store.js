import React from "react";

export const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    case "POUR_BEVERAGE":
      return `Pouring ${action.payload}`;

    case "BEVERAGE_POURED":
      return { message: `${state.beverage} ready.` };

    case "RESET_BEVEREAGE":
      return initialState;
    default:
      return state;
  }
};

export const Context = React.createContext();
