import { ProductsAPI } from "../data/index.d"

export const getProducts = async() =>{
    return await fetch(ProductsAPI)
    .then(res=>res.json())
    .then(data=>{
        return data
    })
}

export const getProductById = async(id:string | undefined) => {
    console.log(id)
    return await fetch(`${ProductsAPI}/${id}`)
  .then(res=>res.json())
  .then(data=>{return data})
}