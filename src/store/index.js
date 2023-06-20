import { configureStore } from '@reduxjs/toolkit'
import {
    carsReducer, changeSearchTerm, removeCar, addCar
} from './slices/carsSlice';
import {
    changeCost, changeName, formReducer
} from './slices/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store, changeCost, changeName, changeSearchTerm, removeCar, addCar }