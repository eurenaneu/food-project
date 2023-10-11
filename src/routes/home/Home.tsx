import styles from './Home.module.css'
import { Card } from '../../components/card/Card'
import { Header } from '../../components/header/Header'
import { useFoodData } from '../../hooks/useFoodData'

export function Home() {
  const { data } = useFoodData();

  return (
    <div className={styles.container}>
      <Header title='Cardápio'/>
      
      <main className={styles.content}>

        {data == null && <div className={styles["no-data-warning"]}>
            <img src="src\assets\img\emoji-triste.png"/>
            <h2>Nada no cardápio hoje...</h2>
          </div>}

        {data != null && <div className={styles["card-grid"]}>
          {data?.map(foodData =>
            <Card
              valor = { foodData.valor.toFixed(2) }
              nome = { foodData.nome.toUpperCase() }
            />
          )}
        </div>}

      </main>
    </div>
  )
}