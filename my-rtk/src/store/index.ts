import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice.ts';

//Змінна яка глобально зберігає інформацію
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});