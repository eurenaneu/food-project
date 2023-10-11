import styles from './Card.module.css'

interface CardProps {
    nome: string,
    valor: string
}

export function Card({ nome, valor } : CardProps){
    return(
        <div className={styles.card}>
            <h2>{nome}</h2>
            <p>R${valor}</p>
        </div>
    )
}