import {APPLY_ADJUSTMENTS} from "../types";

const initialState = {shouldIncreaseTextSize: false, isColourBlind: false, isDyslexic: false};

export default function (state = initialState, action) {
  switch (action.type) {
    case APPLY_ADJUSTMENTS:
      console.log("font: "+action.payload.fontToggle);
      console.log("colour: "+action.payload.colourToggle);
      console.log("dys: "+action.payload.dyslexiaToggle);
      return {
        ...state,
        shouldIncreaseTextSize: action.payload.fontToggle,
        isColourBlind: action.payload.colourToggle,
        isDyslexic: action.payload.dyslexiaToggle,
      };
    default:
      return state;
  }
}
