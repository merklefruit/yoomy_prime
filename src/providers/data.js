// Provider responsible for loading and storing data from the API.
// The majority of the time data is just cached through SWR, but
// for the immutable data such as instructors and course information
// it's best if the API call is made just once and the content can be
// used from this piece of context.

import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

// Types
export const SET_THEME = "SET_THEME";

// Initial state
export const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem("theme", action.theme);
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

const useGlobalContext = () => useContext(StateContext);
export default useGlobalContext;
