import { ProductsAPI } from "../data/index.d"

export const getProducts = async() =>{
    return await fetch(ProductsAPI)
    .then(res=>res.json())
    .then(data=>{
        return data
    })
}