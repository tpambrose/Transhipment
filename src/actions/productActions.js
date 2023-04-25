import { ADD_PRODUCT } from '../constants/actionTypes';

export const addProduct = (newProduct) => ({
    type: ADD_PRODUCT,
    payload: newProduct
});
