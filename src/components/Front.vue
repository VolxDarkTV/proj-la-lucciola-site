<script>
import { store } from '../store';
// Moment
import moment, { weekdays } from 'moment';
// Imports
import Carousel from './front_component/Carousel.vue';
export default{
    data(){
        return{
            store,
        }
    },
    components:{
        Carousel,
    },
    // Moment
    created: function () {
        this.moment = moment;
        moment.locale('it', {
            weekdaysShort : ["Sab", "Lun", "Mar", "Mer", "Gio", "Ven", "Dom"]
        });
    },
    setup() {
        let todaysDate = new Date();
    },
   
}
</script>

<template>
    <section class="my_main_section container d-flex flex-column align-items-center text-center gap-5 p-0">

        <!-- Title & Logo-->
        <div class="d-flex align-items-center gap-3">

            <!-- Title -->
            <h1 class="animate__animated animate__bounceInDown fw-bold">La Lucciola</h1> 

            <!-- Logo -->
            <a href="#" class="my_logo d-flex align-items-center">
                <!-- <img src="https://cdn-icons-png.flaticon.com/512/310/310513.png?w=360" alt="Lucciola"> -->
                <img src="../../public/img/La_LUCCIOLA.png" alt="Lucciola">
            </a>

        </div>

        <!-- General Info -->
        <div class="d-flex flex-column gap-2">
            
            <h6>Bar e Pizzeria</h6>

            <div>
                {{ moment().format("ddd") }} 
                <span>apertura alle ore </span> 
                <span>8:30</span> 
            </div>

        </div>

        <!-- Btn -->
        <div>
            <button class="my_button text-white rounded-pill">
                Richiedi Preventivo
            </button>
        </div>

        <!-- Carousel -->
        <div class="container container-sm container-md container-lg p-0">
            <Carousel/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.my_main_section{
    margin-top: 100px;
}
</style>