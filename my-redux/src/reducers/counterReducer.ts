
//Робимо редюсера, який буде зберігати число.
//По замовчуванню число буде 0 - state = 0
// зберігає об'єкти із значенням count = 0
import {DECREMENT, INCREMENT} from "../types/actionTypes.ts";

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1};
        case DECREMENT:
            return { ...state, count: state.count - 1};
        default:
            return state;
    }
}

export default counterReducer;