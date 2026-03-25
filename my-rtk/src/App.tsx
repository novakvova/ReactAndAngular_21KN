import './App.css'
import {useSelector} from "react-redux";

function App() {
    //Отримало доступ до Storage Redux
    const {value: counter} = useSelector(store => store.counter);

    console.log("Store counter: " + counter);

    return (
        <>
            <h1>Привіт із України :)</h1>
            <h2>Counter: {counter}</h2>
        </>
    )
}

export default App
