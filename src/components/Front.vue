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
            timeSet: `${moment().format("dddd")}`,
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
    // methods:{
    //     getHour(){
    //         var dataDay = moment().format("dddd");
    //         if (dataDay === 'Lunedì') {
    //             moment().set({'hour': 8, 'minute': 30}).format("hh:mm")
    //             console.log('Lunedì');
    //         } else if (dataDay === 'Martedì'){
    //             moment().set({'hour': 8, 'minute': 30}).format("hh:mm")
    //             console.log('Martedì');
    //         } else if (dataDay === 'Mercoledì'){
    //             // document.getElementById("demo").innerHTML = dataDay;
    //             console.log('Mercoledì');
    //         } else if (dataDay === 'Giovedì'){
    //             ' Close '
    //             console.log('Giovedì');
    //         } else if (dataDay === 'Venerdì'){
    //             ' Close '
    //             console.log('Venerdì');
    //         } else if (dataDay === 'Sabato'){
    //             moment().set({'hour': 8, 'minute': 30}).format("hh:mm")
    //             console.log('Sabato');
    //         } else if (dataDay === 'Domenica'){
    //             moment().set({'hour': 8, 'minute': 30}).format("hh:mm")
    //             console.log('Domenica');
    //         } else{
    //             console.log('something went wrong, pleare reload the page ' + dataDay);
    //         }
    //     }
        
    // },
    
    
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

            <div class="d-flex flex-column">

                <!-- All WEEK days -->

                <!-- Monday -->
                <span v-if="timeSet === 'Monday'">
                    Lunedì
                </span>
                <!-- Tuesday -->
                <span v-if="timeSet === 'Tuesday'">
                    Martedì
                </span>
                <!-- Wednesday -->
                <span v-if="timeSet === 'Wednesday'">
                    Mercoledì
                </span>
                <!-- Thursday -->
                <span v-if="timeSet === 'Thursday'">
                    Giovedì
                </span>
                <!-- Friday -->
                <span v-if="timeSet === 'Friday'">
                    Venerdì
                </span>
                 <!-- Saturday -->
                 <span v-if="timeSet === 'Saturday'">
                    Sabato
                </span>
                 <!-- Sunday -->
                 <span v-if="timeSet === 'Sunday'">
                    Domenica
                </span>

                <span v-if="timeSet !== 'Wednesday' && 'Thursday' && 'Friday'"> apertura alle ore </span>

                <!-- All CLOCK sets -->

                <!-- Monday -->
                <span class="color fw-bold" v-if="timeSet === 'Monday'"> {{moment().set({'hour': 15, 'minute': 0}).format("HH:mm") + ' - ' + moment().set({'hour': 19, 'minute': 30}).format("HH:mm") }} </span>

                <!-- Tuesday -->
                <span class="color fw-bold" v-if="timeSet === 'Tuesday'"> {{moment().set({'hour': 15, 'minute': 0}).format("HH:mm") + ' - ' + moment().set({'hour': 19, 'minute': 30}).format("HH:mm") }} </span>

                <!-- Wednesday -->
                <span class="color fw-bold" v-if="timeSet === 'Wednesday'"> Chiuso </span>
                
                <!-- Thursday -->
                <span class="color fw-bold" v-if="timeSet === 'Thursday'"> Chiuso </span>

                <!-- Friday -->
                <span class="color fw-bold" v-if="timeSet === 'Friday'"> Chiuso </span>

                <!-- Saturday -->
                <span class="color fw-bold" v-if="timeSet === 'Saturday'"> 
                    {{
                        moment().set({'hour': 8, 'minute': 0}).format("HH:mm") + ' - ' + moment().set({'hour': 13, 'minute': 0}).format("HH:mm") + ' ' + moment().set({'hour': 15, 'minute': 0}).format("HH:mm") + ' - ' + moment().set({'hour': 19, 'minute': 30}).format("HH:mm")  
                    }} 
                </span>

                <!-- Sunday -->
                <span class="color fw-bold" v-if="timeSet === 'Sunday'"> 
                    {{
                        moment().set({'hour': 8, 'minute': 0}).format("HH:mm") + ' - ' + moment().set({'hour': 13, 'minute': 0}).format("HH:mm") + ' ' + moment().set({'hour': 15, 'minute': 0}).format("HH:mm") + ' - ' + moment().set({'hour': 19, 'minute': 30}).format("HH:mm")  
                    }} 
                </span>
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