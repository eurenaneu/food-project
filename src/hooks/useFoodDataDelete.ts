import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FoodData } from "../interface/FoodData"

const API_URL = "http://localhost:8080"

const deleteData = async (data: FoodData): AxiosPromise<any> => {
    const response = await axios.delete(API_URL + "/food/" + data.id)

    return response;
}

export function useFoodDataDelete() {
    const queryClient = useQueryClient();
    const logicDelete = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                if (error.code === "ERR_NETWORK") {
                    console.error("Não foi possivel realizar a conexão com a API!")
                }
            }
        }
    })

    return logicDelete;
}