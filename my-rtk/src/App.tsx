import './App.css'
import {useDispatch} from "react-redux";
import {decrement, increment} from "./slices/counterSlice.ts";
import MyHeader from "./components/MyHeader.tsx";

function App() {
    //Dispatch відправляє запити на Redux для виконання певних дій
    const dispatch =  useDispatch();
    const onIncrementHandler = () => {
        //Має збільшити змінну глобально
        dispatch(increment()); //Посилаємо команду для виконання дії в Reducer
    }
    const onDecrementHandler = () => {
        dispatch(decrement()); //Посилаємо команду для виконання дії в Reducer
    }
    return (
        <>
            <MyHeader/>
            <h1>Привіт із України :)</h1>
            <button onClick={onIncrementHandler}>Додати на 1</button>
            <button onClick={onDecrementHandler}>Зменшити на 1</button>

        </>
    )
}

export default App
