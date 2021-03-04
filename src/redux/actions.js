import {SIGN_UP, FETCH_DATA, SIGN_IN, APPLY_ADJUSTMENTS} from "./types";

export const signUp = (email) => ({
  type: SIGN_UP,
  payload: {
    email: email,
  },
});

export const signIn = (username, password) => ({
  type: SIGN_IN,
  payload: {
    username: username,
    password: password,
  },
});

export const applyAdjustments = (colourToggle, dyslexiaToggle, fontToggle) => ({
  type: APPLY_ADJUSTMENTS,
  payload: {
    colourToggle : colourToggle,
    dyslexiaToggle : dyslexiaToggle,
    fontToggle : fontToggle,
  },
});

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data: data
  }
};

export const fetchAPIData = () => {
  // Fetching data from online api and limiting to first 5 results
  return (dispatch) => {
      return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()})
      .then((json) => {
        return dispatch(fetchData(json.slice(0,5)));
      } )
      .catch((error) => console.log(error))
}
}
