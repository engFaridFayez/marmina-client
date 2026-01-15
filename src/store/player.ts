import { reactive } from 'vue'

interface AudioTrack {
  id: string
  name: string
  stream_url: string
}

export const player = reactive({
  playlist: [] as any[],
  currentIndex: null as number | null,  // ⬅️ هنا خلي النوع number | null
  isPlaying: false,
  repeat: false,
  autoplay: true,
})