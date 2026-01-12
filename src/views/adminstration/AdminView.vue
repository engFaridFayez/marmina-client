<template>
<<<<<<< HEAD
=======
    <Tabs>
        <Tab title="Add New User">
            <add-user-action></add-user-action>
        </Tab>
        <Tab title="Delete User">
            <delete-user-action></delete-user-action>
        </Tab>
    </Tabs>
>>>>>>> 5bc6de5ebb4d710a44819918a06d7473ec2e529a
    <div>
        <users-overview class="users"></users-overview>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersOverview from './screens/UsersOverview.vue';

<<<<<<< HEAD
export default defineComponent({
    components:{
        UsersOverview
    },
    props:{},
    emits:{},
=======
import Tab from '@/components/common/Tab.vue';
import Tabs from '@/components/common/Tabs.vue';
>>>>>>> 5bc6de5ebb4d710a44819918a06d7473ec2e529a

import UsersOverview from './screens/UsersOverview.vue';
import AddUserAction from './actions/AddUserAction.vue';
import DeleteUserAction from './actions/DeleteUserAction.vue';


export default defineComponent({
    components:{
        AddUserAction,
        DeleteUserAction,
        Tab,
        Tabs,
        UsersOverview
    },


    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>
<<<<<<< HEAD

.users {
=======
.users{
>>>>>>> 5bc6de5ebb4d710a44819918a06d7473ec2e529a
    position: absolute;
    height: 30%;
    bottom: 20px;
    width: 78%;
    margin: .5rem .5rem 1rem;
    overflow-x: scroll;
}

</style>