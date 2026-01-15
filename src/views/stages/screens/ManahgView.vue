

<template>
<NavBar></NavBar>
<section class="parent">
  <section>
    <h1 style="color: white;display: flex;justify-content: center;font-size: 150px;font-weight: 900; ">مكتبة الالحان</h1>
  </section>


<section class="alhan-families">
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h1 class="text-head">أُسر الشمامسة</h1>
      </div>
    </div>
  </div>
  <br><br><br>
  <div class="container">
  <div class="row justify-content-center g-5"> <!-- g-4 هنا spacing بين الكروت -->
    <div class="col-12 col-md-4" v-for="family in families" :key="family.id">
      <div class="card family-card">
        <img 
          :src="getFamilyImage(family.id)" 
          class="card-img-top family-img"
          alt=""
          style="border-radius: 20px;"
        >
        <div class="card-body text-center">
          <h5 class="card-title" style="font-weight: 900; font-size: 30px;">{{ family.name }}</h5>
          <p class="card-text">{{ family.description }}</p>
          <router-link
            :to="{ name: 'alhan-terms', params: { familyId: family.id } }"
            class="btn btn-warning"
            style="color: black;font-weight: 900;font-size: 25px;border-radius: 30px;width: 200px;">
            عرض الالحان
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</section>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { loadFamilies } from '@/api/stages';
import NavBar from '@/components/common/NavBar.vue';

import img1 from '@/assets/families/1.jpg'
import img2 from '@/assets/families/2.jpg'
import img3 from '@/assets/families/3.jpg'
import img4 from '@/assets/families/4.jpg'
import img5 from '@/assets/families/5.jpg'
import img6 from '@/assets/families/6.jpg'
import img7 from '@/assets/families/7.jpg'
import img8 from '@/assets/families/8.jpg'
import img9 from '@/assets/families/9.jpg'
import img10 from '@/assets/families/10.jpg'
import defaultImg from '@/assets/families/default.jpg'

interface Family {
  id: number;
  name: string;
  description: string;
}

export default defineComponent({
  components: { NavBar },

  setup() {
    const families = ref<Family[]>([])

    const familyImages: Record<number, string> = {
      1: img1,
      2: img2,
      3: img3,
      4: img4,
      5: img5,
      6: img6,
      7: img7,
      8: img8,
      9: img9,
      10: img10,
    }

    const getFamilyImage = (id: number) => familyImages[id] || defaultImg

    const allowedIds = [1,2,3,4,5,6,7,8,9,10];

    const getFamilies = async () => {
      try {
        const data = await loadFamilies()
        families.value = (data as Family[]).filter(family => allowedIds.includes(family.id)).sort((a,b)=> a.id - b.id);
      } catch (error) {
        console.log('Failed', error)
      }
    }

    onMounted(() => getFamilies())

    return { families, getFamilyImage }
  }
});
</script>

<style scoped>
  .text-head{
    font-weight: 900;
    border: 5px solid rgb(255, 152, 9);
    border-radius: 20px;
    box-shadow: 5px 10px 5px rgb(114, 114, 114);
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
.family-img{
  height: 400px;
  margin-top: 0;
  object-fit: cover;
  object-position: top;
}

.family-card{
  display: flex;
  justify-content: center;
  width: 350px;
  margin-bottom: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
  border-radius: 20px;
}

.parent{
  direction: rtl;
  background-image: url('@/assets/back.jpg');
  background-position: center;
  object-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>