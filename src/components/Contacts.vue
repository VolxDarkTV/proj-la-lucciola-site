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
    <section class="container mt-5 p-0">

        <!-- Navigation Container -->
        <div class="d-flex flex-column align-items-center gap-4">

            <!-- Pre Title -->
            <div>
                <a href="#contacts" class="color">
                    <h4 class="fw-bold">Contattaci</h4>
                </a>
            </div>
            <!-- Navigation Img -->
            <div>
                <a href="https://www.google.com/maps/place/LA+LUCCIOLA+bar+pizzeria+gelateria/data=!3m1!4b1!4m2!3m1!1s0x13466919a3d19077:0xaa3c2e1027e347f">
                    <div>
                        <img src="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=it&region=IT&markers=color:0xd07ea7|40.7413101,17.7358531&zoom=16&client=google-presto&signature=h420mDFfMwnQKE6IWuRMfWugnmo" alt="Navigation Map">
                    </div>
                </a>
            </div>

        </div>

        <!-- Contacts Container -->
        <div id="contacts" class="d-flex flex-column flex-sm-row justify-content-around align-items-center align-items-sm-start mt-5 gap-3">

            <!-- Contacts -->
            <div>
                <!-- Btn -->
                <div>

                    <a href="tel:+39-320-946-5587" class="my_button rounded-pill p-2 px-4 d-flex align-items-center gap-2 text-white">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                        <span class="d-flex fw-bold">CHIAMA ORA</span>
                    </a>

                </div>
            </div>

            <!-- Address -->
            <div>
                <a href="https://www.google.com/maps/place/LA+LUCCIOLA+bar+pizzeria+gelateria/data=!3m1!4b1!4m2!3m1!1s0x13466919a3d19077:0xaa3c2e1027e347f" class="my_button rounded-pill p-2 px-4 d-flex align-items-center gap-2 text-white">
                    <font-awesome-icon icon="fa-solid fa-location-arrow" />
                    <span class="d-flex fw-bold">INDIRIZZO</span>
                </a>
            </div>

            <!-- Time -->
            <div class="d-flex flex-column align-items-center">

                <p>
                    <button @click="showOfCanvasMenu" :class="showMenu ? '' : 'collapsed'" class="my_button text-white rounded-pill p-2 px-4 d-flex align-items-center gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        <font-awesome-icon icon="fa-solid fa-clock" />
                        ORARI
                    </button>
                </p>
                <div style="min-height: 120px;">
                  <div class="collapse collapse-horizontal" :class="showMenu ? 'show' : ''" id="collapseWidthExample">
                    <div class="bg-dark card card-body" style="width: 300px;">
                        <tbody>
                            <tr>
                                <th>Giorni</th>
                                <td>
                                    <span>
                                        <span class="fw-bold color">lun: </span>
                                        <span>15:00–19:30</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        <span class="fw-bold color">mar: </span>
                                        <span>15:00–19:30</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        <span class="fw-bold color">mer: </span>
                                        <span class="fw-bold">Chiuso</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        <span class="fw-bold color">gio: </span> 
                                        <span class="fw-bold">Chiuso</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        <span class="fw-bold color">ven: </span> 
                                        <span class="fw-bold">Chiuso</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span> 
                                        <span>
                                            <span class="fw-bold color">sab: </span> 
                                            <span>08:30–13:00, </span> 
                                        </span>
                                        <span>15:00–19:30</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <span> 
                                    <span>
                                        <span class="fw-bold color">dom: </span> 
                                        <span>08:30–13:00, </span> 
                                    </span>
                                    <span>15:00–19:30</span>
                                </span>     
                            </tr>
                        </tbody>
                    </div>
                  </div>
                </div>

            </div>

            

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>