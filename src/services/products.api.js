import axios from "axios";

async function getProductsAPI(token) {
    const promise = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);
    return promise.data;
}

export const productsAPI = {
    getProductsAPI,
};
