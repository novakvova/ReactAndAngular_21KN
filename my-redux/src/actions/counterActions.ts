import {DECREMENT, INCREMENT} from "../types/actionTypes.ts";

// при даному action - відбувається збільшення counter
export const increment = () => ({
    type: INCREMENT,
});
// при даному action - зменшення counter
export const decrement = () => ({
    type: DECREMENT,
});