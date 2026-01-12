import { reactive } from 'vue'

export const player = reactive({
  playlist: [],
  currentIndex: null,
  isPlaying: false,
  repeat: false,
  autoplay: true
})