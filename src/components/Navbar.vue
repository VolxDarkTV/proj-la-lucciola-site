<script>

    export default{
        data(){
            return{
                showMenu: false,
            }
        }, methods: {
            showOfCanvasMenu(){
                this.showMenu ? this.showMenu = false : this.showMenu = true;
            }
        }
    }
</script>

<template>

    <nav class="my_background container container-sm container-md container-lg fixed-top d-flex justify-content-between align-items-center gap-3 p-3 shadow">
        
        <!-- Menu -->
        <section class="d-flex align-items-center gap-3">

            <div>
                
                <button @click="showOfCanvasMenu" class="d-flex btn color fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <font-awesome-icon icon="fa-solid fa-bars"  />
                </button>
            
                <div :class="showMenu ? 'show' : ''" class="my_offcanvas_background offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div class="offcanvas-header">
                    <!-- Logo -->
                <div class="my_logo d-flex align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/310/310513.png?w=360" alt="Lucciola">
                </div>
                    <button @click="showOfCanvasMenu" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body ps-5 d-flex flex-column justify-content-between gap-3">

                        <div class="d-flex flex-column gap-3">

                            <a @click="showOfCanvasMenu" href="#" class="d-flex align-items-center gap-5">
                                <font-awesome-icon class="fs-3" :icon="['far', 'pen-to-square']" />
                                <h4>Aggiornamenti</h4>
                            </a>
                            <a @click="showOfCanvasMenu" href="#reviews" class="d-flex align-items-center gap-5">
                                <font-awesome-icon class="fs-3" :icon="['far', 'comment']" />
                                <h4>Testimonianze</h4>
                            </a>
                            <a @click="showOfCanvasMenu" href="#galleria" class="d-flex align-items-center gap-5">
                                <font-awesome-icon class="fs-3" :icon="['far', 'images']" />
                                <h4>Galleria</h4>
                            </a>
                            <a @click="showOfCanvasMenu" href="tel:+39-320-946-5587" class="d-flex align-items-center gap-5">
                                <font-awesome-icon class="fs-3" icon="fa-solid fa-phone" />
                                <h4>Contatti</h4>
                            </a> 

                        </div>

                        <div class="d-flex flex-column gap-3 pb-5">

                            <a @click="showOfCanvasMenu" href="#" class="d-lg-none d-flex align-items-center gap-5">
                                <font-awesome-icon class="fs-3" icon="fa-solid fa-receipt" />
                                <h4>Richiedi un preventivo</h4>
                            </a>
                            
                            <!-- Street Address -->
                            <a @click="showOfCanvasMenu" href="https://www.google.com/maps/place/LA+LUCCIOLA+bar+pizzeria+gelateria/data=!3m1!4b1!4m2!3m1!1s0x13466919a3d19077:0xaa3c2e1027e347f" class="d-lg-none d-flex align-items-center gap-5">
                                <font-awesome-icon class="fs-3" :icon="['far', 'map']" />
                                <h4>Indicazioni Stradali</h4>
                            </a> 


                        </div>

                  </div>
                </div>
    
            </div>
    
            <!-- name -->
            <div class="d-flex gap-2">
                
                <!-- Name -->
                <div class="d-flex align-items-center">
                    <a href="#">
                        <h2 class="color fw-bold">La Lucciola</h2>
                    </a>
                </div>
                
                <!-- Logo -->
                <div class="my_logo d-flex align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/310/310513.png?w=360" alt="Lucciola">
                </div>

            </div>

        </section>

        <!-- Call -->
        <section class="d-lg-flex d-none align-items-center gap-4">
            <a href="#" class="color d-flex align-items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-receipt" />
                <span>Richiedi un preventivo</span>
            </a>
            <a href="tel:+39-320-946-5587" class="color d-flex align-items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-phone" />
                <span>Chiama ora</span>
            </a>
            <a href="https://www.google.com/maps/place/LA+LUCCIOLA+bar+pizzeria+gelateria/data=!3m1!4b1!4m2!3m1!1s0x13466919a3d19077:0xaa3c2e1027e347f" class="color d-flex align-items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-location-arrow" />
                <span>Indicazioni Stradali</span>
            </a>
        </section>


        <!-- Bottom Bar -->
        <section class="d-flex d-lg-none justify-content-around align-items-center gap-sm-5 gap-3 fixed-bottom p-3 bg-dark">
            <a href="#" class="color d-flex flex-column align-items-center gap-2">
                <font-awesome-icon class="fs-1" icon="fa-solid fa-receipt" />
                <span class="d-sm-flex d-none">Richiedi un preventivo</span>
            </a>
            <a href="tel:+39-320-946-5587" class="color d-flex flex-column align-items-center gap-2">
                <font-awesome-icon class="fs-1" icon="fa-solid fa-phone" />
                <span class="d-sm-flex d-none">Chiama ora</span>
            </a>
            <a href="https://www.google.com/maps/place/LA+LUCCIOLA+bar+pizzeria+gelateria/data=!3m1!4b1!4m2!3m1!1s0x13466919a3d19077:0xaa3c2e1027e347f" class="color d-flex flex-column align-items-center gap-2">
                <font-awesome-icon class="fs-1" icon="fa-solid fa-location-arrow" />
                <span class="d-sm-flex d-none">Indicazioni Stradali</span>
            </a>
        </section>


    </nav>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.my_offcanvas_background{
    background-color: $brandPrimary;
}
.my_background{
    background-color: $backgroundBrand;
}
</style>