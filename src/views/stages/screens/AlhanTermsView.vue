<template>
  <NavBar />
  <div class="container text-center mt-5">
    <h1>اختر الترم</h1>

    <div class="d-flex justify-content-center gap-4 mt-4">
      <router-link
        v-for="term in terms"
        :key="term.id"
        :to="{ name: 'alhan-list', params: { familyId, term: term.id } }"
        class="btn btn-warning btn-lg"
      >
        {{ term.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavBar from '@/components/common/NavBar.vue'

defineProps<{
  familyId: string
}>()

const route = useRoute()
const familyId = route.params.familyId

const terms = [
  { id: 1, name: 'الترم الأول' },
  { id: 2, name: 'الترم الثاني' },
  { id: 3, name: 'الترم الثالث' },
]
</script>
