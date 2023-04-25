import { ADD_HANDLER } from "../constants/actionTypes";

const handlerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_HANDLER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default handlerReducer;
