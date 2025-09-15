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
  <div>
    <section>
      <div v-for="family in families">
          <h5>{{ family.name }}</h5>
      </div>
    </section>
    <section>
      <div v-for="stage in stages">
          <h5>{{ stage.name }}</h5>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { loadFamilies, loadStages } from '@/api/stages';
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
    const families = ref()

    const getStages = async () => {
      console.log('calling stages');
      try {
        stages.value = await loadStages()
        console.log('Stages loaded successfully',stages.value);
        
      } catch (error) {
        console.log('Failed',error);
        
      }
      
    }

    const getFamilies = async ()=> {
      try {
        families.value = await loadFamilies()
      } catch (error) {
        console.log('Failed',error);
        
      }

    }

    onMounted(() => {
      getStages(),
      getFamilies()
    })

    return {
      stages,
      families

    }
  }
});
</script>

<style>
  .lol {
    color: rgb(47, 244, 47);
  }
</style>
