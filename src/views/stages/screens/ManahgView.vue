

<template>
<NavBar></NavBar>
<section class="Alhan-carousel">
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active fullimg" data-bs-interval="10000">
      <img src="../../../assets/deacons.jpg" height="300px" class="d-block w-100" alt="">
      <div class="carousel-caption ">
        <h5 style="color: black; margin-top: -100px;">مكتبة الالحان</h5>
      </div>
    </div>
  </div>
</div>
</section>

<section class="alhan-families">
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h1 class="text-head">أُسر الشمامسة</h1>
      </div>
    </div>
  </div>
  <div class="row">
  <div class="col-md-4" v-for="family in families" :key="family.id">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ family.name }}</h5>
        <p class="card-text">{{ family.description }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</section>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { loadFamilies } from '@/api/stages';
import NavBar from '@/components/common/NavBar.vue';


export default defineComponent({

  components: {
    NavBar,
  },

  setup (){
    const families = ref()

    const getFamilies = async ()=> {
      try {
        families.value = await loadFamilies()
      } catch (error) {
        console.log('Failed',error);
        
      }

    }

    onMounted(() => {
      getFamilies()
    })

    return {
      families,
    }
  }
});
</script>

<style scoped>
  .text-head{
    font-weight: 900;
    border: 5px solid rgb(255, 152, 9);
    border-radius: 20px;
    box-shadow: 10px 10px 5px rgb(114, 114, 114);
    padding: 10px 200px 10px 200px;
    margin-top: 20px;
    background-color: rgb(243, 212, 13);
  }
  .fullimg{
  width: 100%;
  object-fit: cover; 
  margin-top: 0;
  position: relative;
  z-index: 1;
}
</style>