import "./MyHeader.css";
import {useSelector} from "react-redux";

const MyHeader = () => {
    //Отримало доступ до Storage Redux
    const {value: counter} = useSelector(store => store.counter);

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    MySite
                </div>

                <nav className="header__nav">
                    <a href="/" className="header__link">Головна</a>
                    <a href="/about" className="header__link">Про нас</a>
                    <a href="/services" className="header__link">Послуги</a>
                    <a href="/contact" className="header__link">Контакти</a>
                </nav>

                <div className="header__actions">
                    <button className="header__btn">Увійти</button>
                    <div className="header__cart">
                        <span className="header__cart-icon">🛒</span>
                        {
                            counter > 0 &&
                            <span className="header__cart-count">{counter}</span>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MyHeader;