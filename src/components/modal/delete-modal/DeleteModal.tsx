import { FormHTMLAttributes, useEffect } from "react"
import styles from "../Modal.module.css"
import { Button } from "../../button/Button"
import { FoodData } from "../../../interface/FoodData"
import { useFoodDataDelete } from "../../../hooks/useFoodDataDelete"
import { useForm } from "react-hook-form"

interface DeleteModalProps extends FormHTMLAttributes<HTMLFormElement>{
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
    modalData: FoodData
}

export function DeleteModal({ setOpen, modalData } : DeleteModalProps) {
    useEffect(() => {
        reset(modalData);
    }, [modalData]);

    const { reset, handleSubmit } = useForm<FoodData>();

    const { mutate } = useFoodDataDelete();

    const handleDelete = (data: FoodData) => {
        mutate(data);
        setOpen(!open)
    }

    return (
        <div className={styles.modal}>
            <h1 className={styles.title}>Deletar prato</h1>

            <p className={styles["modal-message"]}>Certeza que deseja deletar o prato <span className={styles["food-name"]}>{modalData.nome}</span>?</p>
            
            <form onSubmit={handleSubmit(handleDelete)}>
                <div className={styles["button-fields"]}>
                    <Button type="submit" text="sim" />
                    <Button type="button" className={styles["cancel-button"]} onClick={() => setOpen(!open)} text="não" />
                </div>
            </form>
        </div>
    )
}