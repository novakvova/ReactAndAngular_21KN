
// ініціалізація State для даного slice (Reducer)
import {createSlice} from "@reduxjs/toolkit";

const initState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        //state - те, що зберігається в даному Редюсері
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        //через action - можне передавати певне значення, яке зберігається у payload
        incrementByValue: (state, action) => {
            state.value = action.payload;
        }
    }
});
//Дії, які знаходяться в даному Reducer
export const {increment, decrement, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;