import { getUsers,createUser } from "@/api/admin/admin";

import { IUser } from "@/models/IUser";

import { Commit } from "vuex";

import { GlobalState } from "./types";


export default {
    namespaced:true,
    state:{
        users:[]
    },

    mutations:{
        SET_USERS(state:GlobalState,context:IUser[]) {
            state.users = context;
        },
        ADD_USER(state: GlobalState, user: IUser) {
        state.users.unshift(user); // يظهر فوق في الجدول
    }
    },

    actions:{
        SetUsers({commit}:{commit:Commit}) {
            getUsers()
            .then((data) => {
                commit('SET_USERS',data)
            })
            .catch(() => {
                return false;
            })
        },

        CreateUser(
        { commit }: { commit: Commit },
        payload: {
            username: string;
            first_name: string;
            last_name: string;
            email: string;
            password: string;
            is_staff: boolean;
        }
    ) {
        return createUser(payload)
            .then((data) => {
                commit('ADD_USER', data);
                return data;
            })
            .catch((error) => {
                throw error;
            });
    }
    },

    getters: {
        getUsers(state:GlobalState) {
            return state.users
        }
        
    }
}