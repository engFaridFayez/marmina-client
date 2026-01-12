<template>
    <h1>Hello {{ user.first_name }}</h1>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { get as getFromStore } from '@/localStorage';

export default defineComponent({


    setup() {
          const user = computed(() => getFromStore('logged'));

      return { user };
    }
});

</script>

<style lang="scss" scoped>


</style>