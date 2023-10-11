import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
import { Header } from '../../components/header/Header.tsx'
import { Input } from '../../components/input/Input.tsx'
import { Button } from '../../components/button/Button.tsx'
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate.ts'

interface FormData {
  nome: string,
  valor: number
}

export function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const { mutate } = useFoodDataMutate();

  const handleForm = (data: FormData) => {
    mutate(data);
  }

  return (
    <div className={styles.container}>
      <Header title="Registrar comida"/>

      <main className={styles.content}>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className={styles["input-fields"]}>
            <div className={styles["form-group"]}>
              <Input
                className={errors?.nome && styles["input-error"]}
                {...register("nome", { required: true })}
                type="text"
                label="Nome do prato"
              />

              {errors?.nome?.type === "required" && <p className={styles['error-message']}>Obrigatório</p>}
            </div>

            <div className={styles["form-group"]}>
              <Input
                className={errors?.valor && styles["input-error"]}
                {...register("valor", { required: true })}
                type="number"
                label="Preço"
                placeholder="0,00"/>

{errors?.nome?.type === "required" && <p className={styles['error-message']}>Obrigatório</p>}
            </div>
          </div>

          <Button text="Enviar"/>
        </form>
      </main>
    </div>
  )
}