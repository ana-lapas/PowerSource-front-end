import axios from "axios";

export async function purchase(token, purchaseData) {
    const body = {
      purchaseData,
    };
    const promise = await axios.post('http://localhost:5000/products/create', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });  
    return promise.data;
}