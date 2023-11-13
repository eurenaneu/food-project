import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const patchData = async (data: FoodData): AxiosPromise<any> => {
    const response = await axios.patch(API_URL + "/food/" + data.id, {
        "nome": data.nome,
        "valor": data.valor
    })

    return response;
}

export function useFoodDataPatch() {
    const queryClient = useQueryClient();
    const patch = useMutation({
        mutationFn: patchData,
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

    return patch;
}