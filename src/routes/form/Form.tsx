import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
import { Header } from '../../components/header/Header.tsx'
import { Input } from '../../components/input/Input.tsx'
import { Button } from '../../components/button/Button.tsx'
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate.ts'
import { Table } from '../../components/table/Table.tsx'
import { useFoodDataAll } from '../../hooks/useFoodDataAll.ts'

interface FormData {
  nome: string,
  valor: number
}

export function Form() {
  const { data } = useFoodDataAll();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const { mutate } = useFoodDataMutate();

  const handleForm = (data: FormData) => {
    mutate(data);
  }

  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.content}>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className={styles["input-fields"]}>
            <div className={styles["form-group"]}>
              <Input
                className={errors?.nome && styles["input-error"]}
                {...register("nome", { required: true })}
                type="text"
                id="nome-prato"
                label="Nome do prato"
              />

              {errors?.nome?.type === "required" && <p className={styles['error-message']}>Nome não deve estar vazio!</p>}
            </div>

            <div className={styles["form-group"]}>
              <Input
                className={errors?.valor && styles["input-error"]}
                {...register("valor", { required: true, min: 0.01 })}
                type="number"
                id="preco-prato"
                label="Preço"
                placeholder="0,00"/>

              {errors?.valor?.type === "min" && <p className={styles['error-message']}>Preço deve ser maior que 0!</p>}
              {errors?.valor?.type === "required" && <p className={styles['error-message']}>Preço não deve estar vazio!</p>}
            </div>
          </div>

          <Button type="submit" text="Enviar"/>
        </form>

        <hr />

        { data != null && <Table data={data} /> }

        { data == null && <div className={styles['error-container']}>
                            <p className={styles['error-message']}>Nenhum prato disponível!</p>
                          </div> }
      </main>
    </div>
  )
}