import axios from 'axios';

export function createNewProduct({token, productData}){
    console.log(productData, token.token)
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/products/create`, ({productData}), {
        headers: {
            Authorization: `Bearer ${token.token}`,
        },
    })
    return promise.data;
}