<template>
    <div class="main">
        <div class="container">
            <div class="row mb-3">
                <div class="col-9 col-md-10 col-sm-9 justify-content-sm-center justify-content-lg-between">
                    <h1>المناهج</h1>
                </div>
                <div class="col-3 col-md-2 col-sm-3 justify-content-sm-center justify-content-lg-end">
                    <h5><a href="">&larr;رؤية المزيد</a> </h5>
                </div>
                
            </div>
            
            <div class="row justify-content-sm-center">
                <div class="col-12 col-sm-12 mt-sm-3 col-md-6 gap-md-3 col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../../assets/manahg1.jpg" height="160px" alt="Card image cap">
                        <div class="card-body">
                            <h3 class="card-title">الألحان</h3>
                            <ul>
                                <li>الالحان السنوي</li>
                                <li>الحان الميلاد والقيامة</li>
                                <li>الحان الصوم الكبير</li>
                                <li>الجان اسبوع الالام</li>
                            </ul>
                            <a href="#" class="btn btn-outline-secondary">رؤية المزيد</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 mt-sm-3 col-md-6 gap-md-3 col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../../assets/manahg2.png" height="160px"  alt="Card image cap">
                        <div class="card-body">
                            <h3 class="card-title">القبطي</h3>
                            <ul>
                                <li>الحروف</li>
                                <li>ادوات التعريف والتنكير</li>
                                <li>الارقام</li>
                                <li>الساعة</li>
                            </ul>
                            <a href="#" class="btn btn-outline-secondary">رؤية المزيد</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 mt-sm-3 col-md-6 mt-md-3 gap-md-3 col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../../assets/manahg3.jpg" height="160px" alt="Card image cap">
                        <div class="card-body">
                            <h3 class="card-title">العقيدة</h3>
                            <ul>
                                <li>عقيدة الثالوث القدوس</li>
                                <li>عقيدة التجسد والفداء</li>
                                <li>المجامع</li>
                                <li>الجان الشفاعة</li>
                            </ul>
                            <a href="#" class="btn btn-outline-secondary">رؤية المزيد</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    
})
</script>
<style lang="scss" scoped>
    .main{
        direction: rtl;
        background-color: $color-2;
        padding-top: 40px;
        padding-bottom: 40px;


        h1{
            color: $color-1;
            font-weight: 900;
        }

        .card-title{
            font-weight: 900;
        }
        li{
            font-weight: 600;
        }
    }
</style>