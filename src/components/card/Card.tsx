import { HTMLAttributes } from 'react'
import styles from './Card.module.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    nome: string,
    valor: string
}

export function Card({ nome, valor } : CardProps){
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.classList.toggle(styles.active)
    }

    return(
        <div className={styles.card} onClick={handleClick}>
            <h2>{nome}</h2>
            <div className={styles.valores}>
                <p>R${valor}</p>
            </div>
        </div>
    )
}