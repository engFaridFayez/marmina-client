<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { player } from '@/store/player'

const audios = ref([])

onMounted(async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/drive/audio/')
  audios.value = res.data
  player.playlist = res.data
})

const playTrack = (index) => {
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
