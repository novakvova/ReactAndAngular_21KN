// import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./actions/counterActions.ts";

const App = () => {
    //useState - це спеціальний хук, при зміні даних у якому відбувається render компонента
    //render - оновляння компоненту, тобто він перевантаується і оновлює свій вміст
    //setCount - становлює значення для count - це потрібно для render
    // const [count, setCount] = useState(0)

    // Store - це глобальний state - для додатку React
    // глобальний state - це можливість використання даних, які є у Store
    // між різними компонентами
    // Використовується для взаємодії компонентами.
    // Як потраплають у Store - для цього використовуються Reducer
    // Reducer - це частинка Store, яка відповідає за певну інформцію і вміє
    // її зберігати і оновляти.

    //Через useSelector можна звертатися до Store і читати там дані
    //@ts-ignore
    const count =  useSelector(store => store.count);
    console.log("counter = ", count);
    //хук, щоб давати команди для зміни глобального state - REDUX
    const dispatch = useDispatch();

    return (
        <>
            <h1>Привіт! Класна погода! {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

        </>
    )
}

export default App
