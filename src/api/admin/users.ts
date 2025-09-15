import { ILoginCredentials } from "@/models/ILoginCredentials";
import axios from "axios"

export const authenticate = (creds: ILoginCredentials) => {
    axios.defaults.headers.common['Content-Type'] = 'application/json';


    return axios.post('http://127.0.0.1:8000/api/token/',{
        username: creds.username,
        password: creds.password,
    },{}).then((response) => {
    return response.status === 200 ? Promise.resolve(response) : Promise.reject();
})
.catch((error) => {
    if (error.message === "Network Error") return error.message;
    return error.response;
    });
};

