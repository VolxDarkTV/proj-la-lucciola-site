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
            weekdays : ["Sabato", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Domenica"]
        });
    },
    setup() {
        let todaysDate = new Date();
    },
    methods:{
        getHour(){
            var dataDay = moment().format("dddd");
            if (dataDay === 'Lunedì') {
                moment().set({'hour': 8, 'minute': 30}).format("hh:mm")
                console.log('Lunedì');
            } else if (dataDay === 'Martedì'){
                moment().set({'hour': 8, 'minute': 30}).format("hh:mm")
                console.log('Martedì');
            } else if (dataDay === 'Mercoledì'){
                ' Close '
                console.log('Mercoledì');
            } else if (dataDay === 'Giovedì'){
                ' Close '
                console.log('Giovedì');
            } else if (dataDay === 'Venerdì'){
                ' Close '
                console.log('Venerdì');
            } else if (dataDay === 'Sabato'){
                moment().set({'hour': 8, 'minute': 30}).format("hh:mm")
                console.log('Sabato');
            } else if (dataDay === 'Domenica'){
                moment().set({'hour': 8, 'minute': 30}).format("hh:mm")
                console.log('Domenica');
            } else{
                console.log('something went wrong, pleare reload the page ' + dataDay);
            }
        }
        
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
                <span>

                    {{ 
                        moment().format("dddd") + 
                        ' apertura alle ore '  +
                        `${getHour()}`
                    }} 
                </span>
                
                <!-- <span> apertura alle ore </span>  -->
                <!-- <span v-for="clock in store.clockData"> {{ clock.day }} </span>  -->
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