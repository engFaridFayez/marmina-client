<template>
  <div class="header">
    <NavBar />
  </div>
  <div class="carousel">
    <Carousel />
  </div>
  <div>
    <h1>مراحل مدرسة الشمامسة</h1>
    <ol v-for="stage in stages">
      {{ stage.name }}
    </ol>
    <h1 class="lol">API Called successfully</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { loadStages } from '@/api/stages';
import NavBar from '@/components/common/NavBar.vue';
import Carousel from '@/components/Home/Carousel.vue';

export default defineComponent({

  components: {
    NavBar,
    Carousel
  },

  setup (){
    const stages = ref()

    const getStages = async () => {
      console.log('calling stages');
      try {
        stages.value = await loadStages()
        console.log('Stages loaded successfully',stages.value);
        
      } catch (error) {
        console.log('Failed',error);
        
      }
      
    }

    onMounted(() => {
      getStages()
    })

    return {
      stages
    }
  }
});
</script>

<style>
  .lol {
    color: rgb(47, 244, 47);
  }
</style>
