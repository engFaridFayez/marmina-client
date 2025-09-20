import axios,{AxiosError, AxiosResponse} from "axios";
import api from "./api";

const URLS = {
    stages: "stages/",
    families: "families/",
    children: "children/",
    servants: "servants/"
}

export const loadStages = () => {
    return new Promise((resolve,reject) => {
        api.get(URLS.stages)
        .then((response: AxiosResponse)=>{
            if(response.status ===200){
                resolve(response.data)
            }else{
                reject()
            }
        })
        .catch((error:AxiosError)=>{
            console.log('error in loading stages',error);
            
        });
    });
};

export const loadFamilies = () => {
    return new Promise((resolve,reject) => {
        api.get(URLS.families)
        .then((response: AxiosResponse)=>{
            if(response.status ===200){
                resolve(response.data)
            }else{
                reject()
            }
        })
        .catch((error:AxiosError)=>{
            console.log('error in loading families',error);
            
        });
    });
};

export const loadChildren = () => {
    return new Promise((resolve,reject) => {
        api.get(URLS.children)
        .then((response: AxiosResponse)=>{
            if(response.status ===200){
                resolve(response.data)
            }else{
                reject()
            }
        })
        .catch((error:AxiosError)=>{
            console.log('error in loading children',error);
            
        });
    });
};

export const loadServants = () => {
    return new Promise((resolve,reject) => {
        api.get(URLS.servants)
        .then((response: AxiosResponse)=>{
            if(response.status ===200){
                resolve(response.data)
            }else{
                reject()
            }
        })
        .catch((error:AxiosError)=>{
            console.log('error in loading servants',error);
            
        });
    });
};
