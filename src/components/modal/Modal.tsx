import styles from "./Modal.module.css";
import { FoodData } from "../../interface/FoodData";
import { DeleteModal } from "./delete-modal/DeleteModal";
import { EditModal } from "./edit-modal/EditModal";

interface ModalProps {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
    modalData: FoodData,
    type: string,
}

export function Modal({ isOpen, setOpen, modalData, type } : ModalProps) {
    if (isOpen) {
        return (
            <div className={styles.overlay}>
                {type == "edit" && 
                <EditModal modalData={modalData} setOpen={setOpen} isOpen={isOpen}/>}

                { type == "delete" &&
                <DeleteModal modalData={modalData} setOpen={setOpen} isOpen={isOpen}/>}
            </div>
        )
    } else {
        return null;
    }
}
