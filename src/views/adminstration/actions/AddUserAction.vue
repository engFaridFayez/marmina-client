<template>
    <div class="admin-action">
        <div class="admin-action__title">
            <h3><b>New User</b></h3>
        </div>
        <div class="admin-action__content">
            <form>
                <div>
                    <label for="username">Username</label>
                    <input type="text" required name="username">
                </div>
                <div>
                    <label for="firstName">First Name</label>
                    <input type="text" required name="firstName">
                </div>
                <div>
                    <label for="lastName">Last Name</label>
                    <input type="text" required name="lastName">
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" required name="email">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" required name="password">
                </div>
                <div>
                    <label for="isAdmin">Is Admin</label>
                    <select name="isAdmin" required id="">
                        <option :value="1">Yes</option>
                        <option :value="0" selected>No</option>
                    </select>
                </div>
                <button class="button is-primary">Save</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {},

    setup(props, context) {
        return {};
    },
});

</script>
<style lang='scss' scoped>
@import "@/styles/components/administration.scss"
</style>
