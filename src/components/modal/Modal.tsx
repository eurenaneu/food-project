import styles from "./Modal.module.css"
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { FoodData } from "../../interface/FoodData";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useFoodDataPatch } from "../../hooks/useFoodDataPatch";

interface ModalProps {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
    modalData: FoodData
}

interface FormData {
    nome: string,
    valor: number
}

export function Modal({ isOpen, setOpen, modalData } : ModalProps) {
    useEffect(() => {
        reset(modalData);
    }, [modalData]);
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

    const { mutate } = useFoodDataPatch();

    const handleForm = (data: FormData) => {
        mutate(data);
        setOpen(!open)
    }
    
    if (isOpen) {
        return (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <h1 className={styles.title}>Alterar prato</h1>
                    
                    <form onSubmit={handleSubmit(handleForm)}>
                        <div className={styles["input-fields"]}>
                            <div className={styles["form-group"]}>
                                <Input
                                    className={errors?.nome && styles["input-error"]}
                                    {...register("nome", { required: true })}
                                    type="text"
                                    label="Nome do prato"
                                    id="novo-nome"
                                    defaultValue={modalData.nome}
                                />

                                {errors?.nome?.type === "required" && <p className={styles['error-message']}>Nome não deve estar vazio!</p>}
                            </div>

                            <div className={styles["form-group"]}>
                                <Input
                                    className={errors?.valor && styles["input-error"]}
                                    {...register("valor", { required: true, min: 0.01 })}
                                    type="number"
                                    label="Preço"
                                    id="novo-preco"
                                    placeholder="0,00"
                                    defaultValue={modalData.valor}
                                />

                                {errors?.valor?.type === "min" && <p className={styles['error-message']}>Preço deve ser maior que 0!</p>}
                                {errors?.valor?.type === "required" && <p className={styles['error-message']}>Preço não deve estar vazio!</p>}
                            </div>
                        </div>
                        
                        <div className={styles["button-fields"]}>
                            <Button type="submit" className={styles["edit-button"]} text="alterar" />
                            <Button className={styles["cancel-button"]} onClick={() => setOpen(!open)} text="cancelar" />
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
