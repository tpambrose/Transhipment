import {ADD_ITEM} from "../constants/actionTypes"

export const addItem = (newItem) => ({
    type: ADD_ITEM,
    payload: { newItem }
});
