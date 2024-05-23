import React, {useState} from 'react';
import styles from './ui/Header.module.css'
import KitLogo from "./assets/icons/KitLogo.svg"
import user from "./assets/icons/user.svg"
import cart from "./assets/icons/cart.svg"
import search from "./assets/icons/magnifying_glass.svg"
import burger_menu from "./assets/icons/burger.svg"
import cross from "./assets/icons/cross.svg"

const Header = () => {
    const [burger, setBurger] = useState(false)

    const handleClickBurger = () => {
        setBurger((prevState) => !prevState)
    }

    return (
        <header className={styles.header}>
            <div className={`${styles.header__container} ${styles._container} ${burger ? styles.block : ''}`}>
                <div className={styles.header__logo__block}>
                    <img className={styles.header__logo__img} src={KitLogo} alt=""/>
                    <img onClick={() => handleClickBurger()} className={styles.header__cross} src={burger ? cross : ''} alt=""/>
                </div>


                    <nav className={`${styles.header__navbar} ${burger ? styles.active : ''}`}>
                        <ul className={`${styles.header__list} ${styles.list} ${burger ? styles.block : ''}`}>
                            <li className={styles.list__item}>Home</li>
                            <li className={styles.list__item}>Products</li>
                            <li className={styles.list__item}>About us</li>
                        </ul>
                    </nav>

                    <div
                        className={`${styles.header__buttons__block} ${styles.buttons} ${burger ? styles.block : ''}`}
                    >
                        <button className={`${styles.buttons__item} ${styles.buttons__gap}`}>
                            <img src={user} alt=""/>Register / Login
                        </button>
                        <button className={styles.buttons__item}>
                            <img src={cart} alt=""/>
                        </button>
                        <button className={styles.buttons__item}>
                            <img src={search} alt=""/>
                        </button>
                    </div>

                    <div onClick={() => handleClickBurger()} className={`${styles.header__burger} ${burger ? styles.active : ''}`}>
                        <img src={burger_menu} alt=""/>
                    </div>
                </div>
        </header>
    );
};

export default Header;



