import styles from './Home.module.css'
import { Card } from '../../components/card/Card'
import { Header } from '../../components/header/Header'
import { useFoodDataActive } from '../../hooks/useFoodDataActive'

export function Home() {
  const { data } = useFoodDataActive();

  return (
    <div className={styles.container}>
      <Header/>
      
      <main className={styles.content}>

        {data == null && <div className={styles["no-data-warning"]}>
            <img src="src\assets\img\emoji-triste.png"/>
            <h2>Nada no cardápio hoje...</h2>
          </div>}

        {data != null && <div className={styles["card-list"]}>
          {data?.map(foodData =>
            <Card
              key = { foodData.id }
              valor = { foodData.valor.toFixed(2) }
              nome = { foodData.nome.toUpperCase() }
            />
          )}
        </div>}

      </main>
    </div>
  )
}