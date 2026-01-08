<script setup>
  import NavBar from '@/components/common/NavBar.vue';
</script>

<template>
    <div class="header">
      <NavBar :transparent="true"/>
    </div>
  <div class="body">
    <img class="fullimg" src="../../../assets/news.jpeg" alt="">
    <section>
      <br> <br>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <img class="img img-fluid" src="../../../assets/news1.jpg" alt="">
              </div>
              <div class="col-4  text" >
                <div class="row">
                  <div class="col-12">
                    <h2 style="color: red;"> نتيجة مسابقة بي صالبيستيس 2025</h2> 
                  </div>
                  <div class="col-12">
                    <h4> الـنـتـيـجـة الـنـهـائـيـة لـمـسـابـقـة
                        "بــــي صـالـبـيـسـتـيـس-الـمـبـوق-2025"
                        “ أُرَتِّلُ بِالرُّوحِ، وَأُرَتِّلُ بِالذِّهْنِ أَيْضًا." (1 كو 14: 15).
                    </h4> 
                  </div>
                </div>
              </div>
            </div>
            <br><br>
            <div class="row">
              <div class="col-3">
                <img class="img img-fluid" src="../../../assets/news2.png" alt="">
              </div>
              <div class="col-4  text" >
                <div class="row">
                  <div class="col-12">
                    <h2 style="color: red;"> لحن "اي بارثينوس"</h2> 
                  </div>
                  <div class="col-12">
                    <h4> خورس حبيب جرجس
                    </h4> 
                  </div>
                </div>
              </div>
            </div>
            <br><br>
            <div class="row">
              <div class="col-3">
                <img class="img img-fluid" src="../../../assets/news3.png" alt="">
              </div>
              <div class="col-4  text" >
                <div class="row">
                  <div class="col-12">
                    <h2 style="color: red;"> لحن "تينين"</h2> 
                  </div>
                  <div class="col-12">
                    <h4> خورس العدرا مريم
                    </h4> 
                  </div>
                </div>
              </div>
            </div>
            <br><br>
            <div class="row">
              <div class="col-3">
                <img class="img img-fluid" src="../../../assets/news4.png" alt="">
              </div>
              <div class="col-4  text" >
                <div class="row">
                  <div class="col-12">
                    <h2 style="color: red;">منهج سنه تانيه قبطى</h2> 
                  </div>
                  <div class="col-12">
                    <h4> جزء اول : ادوات التعريف و التنكير
                    </h4> 
                  </div>
                </div>
              </div>
            </div>
            <br><br>
            <div class="row">
              <div class="col-3">
                <img class="img img-fluid" src="../../../assets/news1.jpg" alt="">
              </div>
              <div class="col-4  text" >
                <div class="row">
                  <div class="col-12">
                    <h2 style="color: red;"> نتيجة مسابقة بي صالبيستيس 2025</h2> 
                  </div>
                  <div class="col-12">
                    <h4> الـنـتـيـجـة الـنـهـائـيـة لـمـسـابـقـة
                        "بــــي صـالـبـيـسـتـيـس-الـمـبـوق-2025"
                        “ أُرَتِّلُ بِالرُّوحِ، وَأُرَتِّلُ بِالذِّهْنِ أَيْضًا." (1 كو 14: 15).
                    </h4> 
                  </div>
                </div>
              </div>
            </div>
            <br><br>
            <div class="row">
              <div class="col-3">
                <img class="img img-fluid" src="../../../assets/news1.jpg" alt="">
              </div>
              <div class="col-4  text" >
                <div class="row">
                  <div class="col-12">
                    <h2 style="color: red;"> نتيجة مسابقة بي صالبيستيس 2025</h2> 
                  </div>
                  <div class="col-12">
                    <h4> الـنـتـيـجـة الـنـهـائـيـة لـمـسـابـقـة
                        "بــــي صـالـبـيـسـتـيـس-الـمـبـوق-2025"
                        “ أُرَتِّلُ بِالرُّوحِ، وَأُرَتِّلُ بِالذِّهْنِ أَيْضًا." (1 كو 14: 15).
                    </h4> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-outline-dark"><b>رؤية المزيد</b></button>
  </div>
  <br><br><br><br><br><br><br><br><br><br>
</template>

<style scoped>
.fullimg{
  width: 100%;
  height: 500px;
  object-fit: cover; 
  margin-top: 0;
  position: relative;
  z-index: 1;
}
.img{
  width: 300px;
}
.btn{
  font-size: 20px;
  width: 150px;

}
.text{
  display: flex;
  align-items: center;
  justify-content: start;
}
.body{
  direction: rtl;
}
</style>