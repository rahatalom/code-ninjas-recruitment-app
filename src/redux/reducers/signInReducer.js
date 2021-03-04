import {SIGN_IN} from "../types";

const initialState = { signInAttempted: false, signInUsername: "" };

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      if(action.payload.username) {
        console.log("Welcome " + action.payload.username + "!");

        return {
          ...state,
          signInAttempted: true,
          signInUsername: action.payload.username,
        };
      }
    default:
      return state;
  }
}
