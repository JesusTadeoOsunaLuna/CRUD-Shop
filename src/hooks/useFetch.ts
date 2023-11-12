import { useEffect, useState } from "react"
import { getProductById, getProducts } from "../services"
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

export const useItemSelected = (id:string | undefined) => {
    const [product, setProduct] = useState<Products>()

    useEffect(()=> {
        const getProduct = async()=>{
            const res = await getProductById(id)
            setProduct(res)
            console.log(res)
        }
        getProduct()
    },[])
    return product
}