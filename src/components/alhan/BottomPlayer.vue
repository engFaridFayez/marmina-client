<template>
  <div class="player-bar" v-if="player.currentIndex !== null">
    <div class="info">🎵 {{ player.playlist[player.currentIndex]?.name }}</div>

    <audio
      ref="audio"
      preload="none"
      @ended="handleEnded"
    >
      <source
        :src="`http://127.0.0.1:8000/api/drive/stream/${player.playlist[player.currentIndex]?.id}/`"
        type="audio/mpeg"
      />
    </audio>

    <div class="controls">
      <button @click="prev">⏮</button>
      <button @click="togglePlay">
        <i v-if="player.isPlaying" class="bi bi-pause-fill"></i>
        <i v-else class="bi bi-play-fill"></i>
      </button>
      <button @click="next">⏭</button>
<button
  @click="player.repeat = !player.repeat"
  :class="repeatClass"
>
      <i class="bi bi-repeat"></i>
</button>    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import { player } from '@/store/player'
import { computed } from 'vue'

const repeatClass = computed(() => {
  return {
    active: player.repeat
  }
})

const audio = ref(null)
const isReady = ref(false)

onMounted(() => {
  isReady.value = true
})

const handleEnded = async () => {
  try {
    if (player.repeat) {
      // إعادة تشغيل نفس التراك
      audio.value.currentTime = 0
      await audio.value.play()
      player.isPlaying = true
      return
    }

    if (player.autoplay) {
      next()
    } else {
      player.isPlaying = false
    }
  } catch (err) {
    if (err.name === 'AbortError') console.warn('Play interrupted, ignoring.')
    else console.error(err)
  }
}
// Watch currentIndex changes
watch(
  () => player.currentIndex,
  async (newIndex) => {
    if (newIndex === null || !audio.value || !isReady.value) return

    try {
      audio.value.pause()       // ⬅️ توقف أي صوت قبل play الجديد
      audio.value.load()        // ⬅️ reload source
      await nextTick()          // ⬅️ انتظار DOM update

      await audio.value.play()  // ⬅️ async play مع await
      player.isPlaying = true
    } catch (err) {
      if (err.name === 'AbortError') console.warn('Play interrupted, ignoring.')
      else console.error(err)
    }
  }
)

const togglePlay = async () => {
  if (!audio.value) return

  try {
    if (player.isPlaying) {
      audio.value.pause()
    } else {
      // تأكد من توقفه قبل play
      if (audio.value.paused) await audio.value.play()
    }

    player.isPlaying = !player.isPlaying
  } catch (err) {
    if (err.name === 'AbortError') console.warn('Play interrupted, ignoring.')
    else console.error(err)
  }
}

const next = () => {
  if (player.currentIndex < player.playlist.length - 1) player.currentIndex++
  else if (player.repeat) player.currentIndex = 0
}

const prev = () => {
  if (player.currentIndex > 0) player.currentIndex--
}
</script>

<style scoped>
.player-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #2F1113;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 999;
}

.controls button {
  font-size: 18px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: #5d1015;
  color: white;
}
.controls button.active {
  background-color: rgb(46, 24, 24) !important;
}
.controls .active {
  background-color: rgb(61, 20, 20);
}

</style>
