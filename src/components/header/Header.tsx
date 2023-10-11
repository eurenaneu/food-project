import './Header.module.css'
import { Link } from "react-router-dom"

interface HeaderProps {
    title: string
}

export function Header({ title } : HeaderProps){
    return(
        <header>
            <h1>{title}</h1>

            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/form">Registrar</Link></li>
            </ul>
        </header>
    )
}