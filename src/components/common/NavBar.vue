<template>

    <div class="default-layout">
        <nav class="navbar navbar-expand-lg" :class="{'navbar-transparent':transparent}">
    <div>
    <section>
      <div class="dropdown" @click.outside="open = false">
  <button class="btn"  @click.stop="toggle">
    Hello, {{ loggedUser }} &#x25BC;
  </button>

  <div class="dropdown-menu show" v-if="open">
    <RouterLink to="/profile" class="dropdown-item" style="cursor: pointer;">
      Profile <i class="bi bi-person-circle"></i>
    </RouterLink>
    <a class="dropdown-item" @click.prevent="logout" style="cursor: pointer;">
      Logout <i class="bi bi-box-arrow-right"></i> 
    </a>
  </div>
</div>
        
    </section>
  </div>
            <button class="navbar-toggler order-last"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="nav-center-links collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">الصفحة الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link" href="#">عن المدرسة</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/news" class="nav-link" href="#">الأخبار</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/manahg" class="nav-link" href="#">المناهج</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="nav-link" href="#">تواصل معنا</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="nav-right-links">
                <img src="../../assets/logo.png" width="50" height="50" alt="">
                <span>مدرسة شمامسة الملاك <br> سوريال ومارمينا - بالعمرانية</span>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import { defineComponent,computed, onMounted, ref, onUnmounted  } from 'vue';
import { get as getFromStore,remove as removeFromStore } from '@/localStorage';
import { RouterLink, useRoute } from 'vue-router';
import router from '@/router';

export default defineComponent({

  props:{
    transparent:{
      type:Boolean,
      default:false
    }
  },
  
setup(props) {
  const open = ref(false);

    const toggle = () => {
      open.value = !open.value;
    };

    const close = () => {
      open.value = false;
    };

    onMounted(() => {
      document.addEventListener('click', close);
    });

    onUnmounted(() => {
      document.removeEventListener('click', close);
    });

    const isActiveLink = (routePath: any) =>{
    const route = useRoute()
    return route.path === routePath;
}

  const loggedUser = computed(
    () => getFromStore('logged.first_name') || 'Not logged'
  );

  const logout = () => {
    removeFromStore('logged');
    router.push({ name: 'home' });
  };

  return {
    open,
    toggle,
    loggedUser,
    logout,
    isActiveLink,
    props
  };
}

});



</script>
<!-- MDB -->
<style lang="scss">
    .navbar-transparent {
  background-color: transparent !important;
  box-shadow: none;
  position: absolute; /* يخلي الـ navbar فوق الصورة */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* عشان يكون فوق كل العناصر */
}
</style>