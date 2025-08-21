<template>
  <div class="header">
    <NavBar />
  </div>
  <div class="carousel">
    <Carousel />
  </div>
  <div class="body">
    <BodyContent />
  </div>
  <div>
    <Manahg />
  </div>
  <div>
    <Contact />
  </div>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { loadStages } from '@/api/stages';
import NavBar from '@/components/common/NavBar.vue';
import Carousel from '@/components/Home/Carousel.vue';
import BodyContent from '@/components/Home/BodyContent.vue';
import Manahg from '@/components/Home/Manahg.vue';
import Contact from '@/components/Home/Contact.vue';
import Footer from '@/components/Home/Footer.vue';

export default defineComponent({

  components: {
    NavBar,
    Carousel,
    BodyContent,
    Manahg,
    Contact,
    Footer
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
