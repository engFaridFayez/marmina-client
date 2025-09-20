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
  <section>
    <router-link v-if="isAdmin" :to="{name: 'administration'}">
      Administration
    </router-link>
  </section>
  <section>
    <router-link :to="{name: 'users'}">
      Users
    </router-link>
  </section>
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
  <div>
    <section class="logout">
      <a @click.prevent="logout">
        <span>Logout {{ loggedUser}}</span>
      </a>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { loadFamilies, loadStages } from '@/api/stages';
import NavBar from '@/components/common/NavBar.vue';
import Carousel from '@/components/Home/Carousel.vue';
import BodyContent from '@/components/Home/BodyContent.vue';
import Manahg from '@/components/Home/Manahg.vue';
import Contact from '@/components/Home/Contact.vue';
import Footer from '@/components/Home/Footer.vue';
import { get as getFromStore,remove as removeFromStore } from '@/localStorage';
import router from '@/router';

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

    const loggedUser = computed(()=>getFromStore('logged.username') || 'Not logged')

    const isAdmin = computed(()=> getFromStore('logged.isAdmin'))

    const getStages = async () => {
      try {
        stages.value = await loadStages()
        
      } catch (error) {
        
      }
      
    }

    const logout = ()=>{
      removeFromStore('logged');
      router.push({
        name:'home'
      })
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
      families,
      isAdmin,
      loggedUser,
      logout

    }
  }
});
</script>

<style>
  .lol {
    color: rgb(47, 244, 47);
  }
</style>
