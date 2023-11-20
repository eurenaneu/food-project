import { useState } from "react";
import { Modal } from '../modal/Modal'
import { FoodData } from "../../interface/FoodData"
import styles from "./Table.module.css"
import { EditOutlined, DeleteOutlined } from '@mui/icons-material/'

interface TableProps {
    data?: FoodData[]
}

const defaultFoodData: FoodData = {
    id: -1,
    nome: "",
    valor: 0,
    active: false
}

export function Table({ data } : TableProps) {
    const [open, setOpen] = useState(false);
    const [formState, setFormState] = useState<FoodData>(defaultFoodData)
    const [type, setType] = useState("")

    function handleEditClick(foodData: FoodData) {
        setType("edit");
        setFormState(foodData);
        setOpen(!open);
    }

    function handleDeleteClick(foodData: FoodData) {
        setType("delete");
        setFormState(foodData);
        setOpen(!open);
    }

    return (
        <>  
            <Modal isOpen={open} setOpen={setOpen} modalData={formState} type={type}/>

            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th className={styles.coluna}>ID</th>
                        <th className={styles.coluna}>Nome</th>
                        <th className={styles.coluna}>Valor</th>
                        <th className={styles.coluna}>Ativo</th>
                        <th className={styles.coluna}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map(foodData =>
                        <tr key={foodData.id}>
                            <td>{foodData.id}</td>
                            <td title={foodData.nome}>{foodData.nome}</td>
                            <td>R${foodData.valor.toFixed(2)}</td>
                            <td className={(foodData.active) ? styles["active-food"] : styles["inactive-food"]}>
                                {(foodData.active) ? "ON" : "OFF"}
                            </td>
                            <td>
                                <a onClick={() => {
                                    handleEditClick(foodData)
                                }}><EditOutlined /></a>
                                <a onClick={() => {
                                    foodData.active ? handleDeleteClick(foodData) : null
                                }}><DeleteOutlined /></a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )

}