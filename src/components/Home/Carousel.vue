<template>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../../assets/img1.jpg" height="700px" class="d-block w-100" alt="">
      <div class="carousel-caption ">
        <h5>مرحباً بكم في مدرسة الشمامسة</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../../assets/img2.jpg" height="700px" class="d-block w-100" alt="">
      <div class="carousel-caption">
        <h5>كُلُّ نَسَمَةٍ فَلْتُسَبِّحِ ٱلرَّبَّ. هَلِّلُويَا</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../../assets/img3.jpg" height="700px" class="d-block w-100" alt="">
      <div class="carousel-caption">
        <h5>تنشئة روحية وليتروجيه للأجيال الجديدة</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    
})
</script>
<style>

@media (max-width: 1920px){
  .carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; /* يضمن إن الكلام يفضل في النص */

}
    .carousel-caption h5,p {
    color: white;
    font-size: 100px;
    font-weight: 900;
}
}

@media (max-width: 768px){
  .carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; /* يضمن إن الكلام يفضل في النص */
  }
    .carousel-caption h5,p {
    color: white;
    font-size: 70px;
    font-weight: 900;
}
}

</style>