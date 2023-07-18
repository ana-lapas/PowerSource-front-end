import axios from "axios";

export async function purchase(token, purchaseData) {
    const body = {
      purchaseData,
    };
    const promise = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/products/create`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });  
    return promise.data;
}