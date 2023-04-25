import { ADD_ITEM } from "../constants/actionTypes";

const initialState = {
  plateNumber: "",
  handlers: [],
  productName: "",
  itemNbr: "",
  pricePerItem: "",
  weightPerItem: "",
  supportingDocs: "",
};

const itemReducer = (state, action) => {
  if (typeof state === "undefined") {
    return { ...initialState };
  }
  switch (action.type) {
    case ADD_ITEM:
      let {
        plateNumber,
        handlers,
        productName,
        itemNbr,
        pricePerItem,
        weightPerItem,
        supportingDocs,
      } = action.payload.newItem;
      return {
        ...state,
        plateNumber: plateNumber,
        handlers: handlers,
        productName: productName,
        itemNbr: itemNbr,
        pricePerItem: pricePerItem,
        weightPerItem: weightPerItem,
        supportingDocs: supportingDocs,
      };
    default:
      return state;
  }
};
export default itemReducer;
