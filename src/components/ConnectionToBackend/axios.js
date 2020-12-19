import axios from "axios";

const baseRequest = axios.create({
    baseURL: "http://127.0.0.1:5000/item",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getItems(){
    return (await baseRequest.get()).data;
}

export async function getItemById(id){
    return (await baseRequest.get(`/${id}`)).data;
} 

export async function getFilteredItems(type, price, condition){
    return (await baseRequest.get(`/filters/type=${type}&price=${price}&condition=${condition}`)).data;
} 