import { createStore, combineReducers } from 'redux';
import carReducer from '../reducers/carReducer';
import productReducer from '../reducers/productReducer';
import handlerReducer from '../reducers/handlerReducer';
import itemReducer from "../reducers/itemReducer";
import dummyData from './dumyData';

const rootReducer = combineReducers({
    cars: carReducer,
    products: productReducer,
    handlers: handlerReducer,
    newItem:itemReducer,
});

const initialState = {
    cars: dummyData.carsData,
    products: dummyData.productsData,
    handlers: dummyData.handlersData,
};

const store = createStore(rootReducer,initialState);

export default store;
