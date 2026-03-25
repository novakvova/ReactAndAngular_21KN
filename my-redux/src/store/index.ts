import {createStore} from "redux"; // просто підказує, що є стрішки застарілий спосіб
import counterReducer from "../reducers/counterReducer.ts";

const store = createStore(counterReducer);

export default store;