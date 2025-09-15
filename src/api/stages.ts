import axios,{AxiosResponse} from "axios";

export const loadStages = () => {
    return axios.get('http://127.0.0.1:8000/api/stages/')
    .then((response:AxiosResponse) => {
        console.log(response.data);

        return response.data
        
    })
}

export const loadFamilies = () => {
    return axios.get('http://127.0.0.1:8000/api/families/')
    .then((response:AxiosResponse) => {
        console.log(response.data);

        return response.data
        
    })
}

