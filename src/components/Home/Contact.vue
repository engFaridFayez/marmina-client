<template>
    <div class="main">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <h1>تواصل معنا</h1>
                <hr>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <form>
                <div class="form-row d-flex gap-5">
                    <div class="form-group ">
                        <input type="email" class="form-control" id="inputEmail4" placeholder="البريد الالكتروني *">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="الاسم *">
                    </div>
                </div>
                <br><br>
                <div class="form-row d-flex gap-5">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="عنوان الاقراح / المشكلة / الرسالة *">
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="رقم التليفون *">
                    </div>
                </div>
                <br><br>
                <div class="form-group">
                    <textarea class="form-control" placeholder="الرسالة *" id="floatingTextarea"></textarea>
                </div>
                <br><br>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn">إرسال الرسالة</button>
                </div>
            </form>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    
})
</script>
<style lang="scss" scoped>
    .main {
        background:  linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('../../assets/contact.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding: 50px;
        direction: rtl;

        textarea{
            height: 100px;
        }
        .btn{
            background-color: $color-4;
            color: white;
            font-size: 20px;
        }
        h1{
            color: white;
            font-weight: 900;
            margin-bottom: 50px;
        }
    }
</style>