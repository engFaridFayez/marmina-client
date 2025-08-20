<template>
    <div class="about">
        <div class="row">
            <div class="col-12">
                <div class="row body-content">
                    <div class="col-12 col-md-6 col-lg-6">
                        <img class="imgContent" src="../../assets/logo.png" alt="">
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 content">
                        <h2>عن مدرسة الشمامسة</h2>
                        <h5>مدرسة الشمامسة بكنيسة الملاك الجليل سوريال والشهيد العظيم مارمينا - بالعمرانية </h5>
                        <ul>
                            <li>بدأت المدرسة عام 2006 م</li>
                            <li>بدأت المدرسة بحفظ الألحان فقط ولكن مه مرور الوقت اصبح هناك مناهج اخري مثل (طقس - قبطي - عقيدة ...)</li>
                        </ul>
                        <br>
                        <h2>هدف خدمة الشمامسة</h2>
                        <h5>اعداد جيل كنسي قوي مهتم بالليتروجيا والصلوات الكنسية ومواظب علي حضور القداسات <br>وحفظ الالحان القبطية وفهم الطقوس واجادة <br>اللغهة القبطية بالاضافه الي بعض الحقائق والعقائد الايمانية</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="news">
        <div class="row">
            <div class="col-12 col-md-12 news-body ">
                <h2 class="title">الاخبار</h2>
                <ul class="list">
                    <li><a href="" class="active">الجميع</a></li>
                    <li><a href="">مسابقة بي صالبستيس 2025</a></li>
                    <li><a href="">اسرة الأنبا بيشوي</a></li>
                    <li><a href="">اسرة مارمينا</a></li>
                    <li><a href="">اسرة الانبا انطونيوس</a></li>
                    <li><a href=""> اسرة البابا كيرلس عمود الدين</a></li>
                    <li><a href="">خورس حبيب جرجس</a></li>
                </ul>
                <div class="row news-imgs">
                    <div class="col-12 col-md-12 col-lg-6">
                        <img class="main-img" src="../../assets/newsBig.jpg"  alt="">
                    </div>

                    <div class="col-12 col-md-12 col-lg-6">
                        <div class="row small-imgs">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6">
                                        <img class="sm-img" src="../../assets/news1.jpg" alt="" width="190px" height="110">
                                    </div>
                                    <div class="col-6">
                                        <span>نتيجة مسابقة بي صالبستيس 2025</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6">
                                        <img class="sm-img" src="../../assets/news2.png" alt="" width="190px" height="110">
                                    </div>
                                    <div class="col-6">
                                        <span>لحن "اي بارثينوس" خورس حبيب جرجس</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6">
                                        <img class="sm-img" src="../../assets/news3.png" alt="" width="190px" height="110">
                                    </div>
                                    <div class="col-6">
                                        <span>لحن "تينين" خورس العذراء مريم</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6">
                                        <img class="sm-img" src="../../assets/news4.png" alt="" width="190px" height="110">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <span>منهح سنة تانيه قبطي جزء اول : ادوات التعريف والتنكير</span>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-secondary">رؤية المزيد</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    
})
</script>
<style lang="scss" scoped>
    @media (max-width:1920px) {
        .body-content {
        background-color: $color-2;
        }
        .content {
        display: flex;
        flex-direction: column;
        direction: rtl;
        margin-left: -180px;
        padding: 15px;
        padding-top: 50px;
        padding-bottom: 50px;
        h2{
            color: $color-1;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: 900;
        }
    }
        .imgContent {
            width:300px;
            height:300px;
            margin: 60px;
            margin-left: 120px;
        }
    }
    @media(max-width:1070px){
        .content {
        display: flex;
        flex-direction: column;
        direction: rtl;
        margin-left: -90px;
        padding: 15px;
        padding-top: 50px;
        padding-bottom: 50px;
        h2{
            color: $color-1;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: 900;
        }
    }
    .imgContent {
            width:300px;
            height:300px;
            margin: 60px;
            margin-left: 90px;
        }
    }
    @media(max-width:991px){
        .content {
        display: flex;
        flex-direction: column;
        direction: rtl;
        margin-left: -90px;
        padding: 15px;
        padding-top: 50px;
        padding-bottom: 50px;
        h2{
            color: $color-1;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: 900;
        }
    }
    .imgContent {
            width:300px;
            height:300px;
            margin: 90px;
            margin-left: 50px;
        }
    }
    @media(max-width:768px){
        .content {
        display: flex;
        flex-direction: column;
        direction: rtl;
        margin-left: -1px;
        padding: 15px;

        h2{
            color: $color-1;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: 900;
            text-align: center;
        }
        h5 {
            text-align: center;
        }
        ul{
            text-align: center;
            list-style-position: inside;
        }
    }
    .imgContent {
            width:100%;
            height:100%;
            text-align: center;
            margin: 0;
            
        }
    }


    
</style>