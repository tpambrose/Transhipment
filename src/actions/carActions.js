import { ADD_CAR } from '../constants/actionTypes';

export const addCar = (newCar) => (
    {
    type: ADD_CAR,
    payload: newCar
});
