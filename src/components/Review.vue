<script>
import CarouselReview from '../components/review_component/CarouselReview.vue';
export default{
    components:{
        CarouselReview,
    }
}
</script>

<template>
    <!-- <section class="container">

        <div class="row d-flex justify-content-between">

            <div class="square_test col-3 bg-danger">
    
            </div>
            <div class="square_test col-3 bg-danger">
    
            </div>
            <div class="square_test col-3 bg-danger">
    
            </div>
            

        </div>

    </section> -->
    <!-- Carousel -->
    <div class="container container-sm container-md container-lg p-0">
        <CarouselReview/>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
.square_test{
    // width: 300px;
    height: 300px;
    background-color: aquamarine;
}
</style>