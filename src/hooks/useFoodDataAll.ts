import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData"
import { useQuery } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + "/food")

    return response;
}

export function useFoodDataAll() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2,
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                if (error.code === "ERR_NETWORK") {
                    console.error("Não foi possivel realizar a conexão com a API!")
                }
            }
        }
    })
    
    return { 
        ...query,
        data: query.data?.data
    }
}