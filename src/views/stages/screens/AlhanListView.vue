<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { player } from '@/store/player'
import BottomPlayer from '@/components/alhan/BottomPlayer.vue'

const route = useRoute()

const audios = ref<any[]>([])

const familyId = route.params.familyId as string
const term = route.params.term as string

onMounted(async () => {
  try {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/drive/alhan/',
      {
        params: {
          family: familyId,
          term: term
        }
      }
    )

    audios.value = res.data

    // نفس منطق الكود القديم
    player.playlist = res.data
    player.currentIndex = 0
  } catch (err) {
    console.error('Failed to load audios', err)
  }
})

const playTrack = (index: number) => {
  player.currentIndex = index
}
</script>

<template>
  <div>
    <div
      v-for="(audio, index) in audios"
      :key="audio.id"
      class="audio-item"
      @click="playTrack(index)"
    >
      🎵 {{ audio.name }}
    </div>

    <div v-if="audios.length === 0">
      لا توجد ألحان لهذا الترم
    </div>

    <!-- ضيف الـ Player Bar هنا بحيث يظهر تلقائياً -->
    <BottomPlayer v-if="player.currentIndex !== null"/>
  </div>
</template>

<style scoped>
.audio-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}
.audio-item:hover {
  background: #f5f5f5;
}
</style>
