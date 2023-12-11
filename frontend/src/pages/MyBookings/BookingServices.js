import axios from "axios";

export async function fetchBookings(){
    try{
        // const response= await axios.get("http://127.0.0.1:4000/api/v1/tours");
        const response= await axios.get("http://127.0.0.1:4000/api/v1/booking");
        console.log(response.data.data);
        return response.data.data;
    }catch(error){
        console.log(error);
    }
}
export async function updateData(body){
    try{
        const response= await axios.put("http://127.0.0.1:4000/bookings",body);
        return response.data;
    }catch(error){
        console.log(error);
    }
}
export async function deleteData(id){
    try{
        // const url=`http://127.0.0.1:4000/api/v1/tours/${id}`;
        const url=`http://127.0.0.1:4000/api/v1/booking/${id}`;
        console.log(url);   
        const response=await axios.delete(`${url}`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}