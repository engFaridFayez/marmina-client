<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <div class="default-layout">
        <nav class="navbar navbar-expand-lg">
            <div class="nav-left-links order-first ">
                <a href="#" class="nav-link text-white"><i class="bi bi-search"></i></a>
                <a href="#" class="nav-link text-white"><i class="bi bi-globe-americas"></i></a>
                <a href="#" class="nav-link text-white"><i class="bi bi-person-circle"></i></a>
            </div>
            <button class="navbar-toggler order-first"
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
                        <a class="nav-link" href="#">عن المدرسة</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">الأخبار</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">المناهج</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">تواصل معنا</a>
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
import { defineComponent } from 'vue';
import * as bootstrap from 'bootstrap';

export default defineComponent({

});
</script>
<style lang="scss">
    
</style>