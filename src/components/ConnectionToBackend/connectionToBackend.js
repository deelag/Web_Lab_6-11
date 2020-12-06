import axios from "axios";

const baseRequest = axios.create({
    baseURL: "http://127.0.0.1:5000/item",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getItems(){
    // await delay(4000);
    return (await baseRequest.get()).data;
}

export async function getFilteredItems(type, price, condition){
    // await delay(5000);
    return (await baseRequest.get(`/filters/type=${type}&price=${price}&condition=${condition}`)).data;
} 

async function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}