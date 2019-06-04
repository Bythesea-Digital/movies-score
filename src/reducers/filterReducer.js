import { ORDER } from "../actions/types";

const initialState = {
  ordered: [],
};

export default function(state = initialState, action){
  switch(action.type){
    case ORDER:
      return {
        ...state,
        ordered: action.payload
      };
    default:
      return state;
  }
}
