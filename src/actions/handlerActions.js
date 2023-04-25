import { ADD_HANDLER } from '../constants/actionTypes';

export const addHandler = (newHandler) => ({
    type: ADD_HANDLER,
    payload: newHandler
});
