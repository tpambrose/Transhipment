import { ADD_PRODUCT } from "../constants/actionTypes";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productReducer;
