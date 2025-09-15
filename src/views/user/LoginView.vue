<template>
    <div class="login">
        <form @submit.prevent="login" autocomplete="off">
            <p class="login-title">Login</p>
            <div class="input">
                <label for="login_username">Username</label>
                <input type="text" placeholder="Username" />
            </div>
            <div class="input">
                <label for="login_password">Password</label>
                <input type="password" placeholder="Password" />
            </div>
            <button class="button">
                Login
            </button>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent, warn } from 'vue';
import { authenticate } from '@/api/admin/users';
import { ILoginCredentials } from '@/models/ILoginCredentials';
import { save as saveToStore } from '@/localStorage';

export default defineComponent({
    components:{},


    setup() {
        const login = async () => {
            const body: ILoginCredentials = {
                username: "farid",
                password: "Trumpet_1"
            }

            let response = await authenticate(body);

            if(!response) {
                console.warn('error logging',response)
            }else{
                console.info('logging successfull',response);
                saveToStore('logged',{
                    username:response.data.username,
                    isAdmin:response.data.is_admin,
                    access_token:response.data.access,
                    requiresReset: response.data.requires_reset
                })
            }
        }
        return {
            login,
        };
    },
});
</script>
<style lang="scss">
    .login{
        background: #CD2A2B;
        background: linear-gradient(90deg,rgba(205, 42, 43, 1) 0%, rgba(139, 46, 42, 1) 52%);
        width: 100%;
        height: 100vh;
        overflow: scroll;
        display: flex;
        align-items: center;

        @include flex-v;
        min-height: 100vh;
        justify-content: center;
        align-items: center;

        >form{
            margin: 0 10%;
            padding: 30px 60px 80px;
            min-width: 480px;
            max-width: 480px;
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 20px;

            .login-title{
                margin: 10px auto 20px;
                color: #fff;
                font-size: 26px;
                font-weight: bold;
            }

            .input {
                @include flex-v;

                >label{
                    margin-bottom: 8px;
                    font-size: 22px;
                    color: #fff;
                }

                >input {
                    border-radius: 8px;
                    max-width: 440px;
                    border: 1px solid #fff;
                    color: gray;
                    width: 100%;
                    padding: 16px;
                    
                }
            }


            @include flex-v;

            @include not-last-child {
                margin-bottom: 24px;
            }

            >.button {
                padding: 16px 24px;
                border-radius: 8px;
                background-color: #2C3040;
            }
        }
        
    }

</style>