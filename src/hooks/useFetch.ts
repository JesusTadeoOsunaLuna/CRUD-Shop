import { useEffect, useState } from "react"
import { getProducts } from "../services"
import {type Products } from "../types/index.t"

export const useSetData = () => {
    const [data, setData] = useState<Products[]>()

    useEffect(() => {
        const fetchData = async()=>{
            const res = await getProducts()
            setData(res)
        }
        fetchData()
    }, [])

    return data
    
}