import styles from './Header.module.css'
import { NavLink } from "react-router-dom"

export function Header(){
    return(
        <header>
            <h1>FOOD!</h1>

            <ul>
                <li className={styles["nav-item"]}><NavLink to="/">Cardápio</NavLink></li>
                <li className={styles["nav-item"]}><NavLink to="/form">Cadastrar</NavLink></li>
            </ul>
        </header>
    )
}