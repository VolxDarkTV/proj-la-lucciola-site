<script>
import StarRating from 'vue-star-rating';
export default{
    components:{
        StarRating,
    }
}
</script>

<template>
    <section class="contaier mt-5 mb-5 p-0">

        <div class="container d-flex flex-column align-items-center gap-4 p-0">

            <!-- Pre Title -->
            <div>
                <a href="#reviews" class="color">
                    <h4 id="reviews" class="fw-bold">Testimonianze</h4>
                </a>
            </div>

            <!-- Reviews -->
            <div class="container row row-cols-sm-4 row-cols-md-3 row-cols-1 d-flex justify-content-around gap-5">

                <!-- Review -->
                <div class="my_stars_rating col d-flex flex-column gap-4">
                    <!-- Stars -->
                    <div class="d-flex align-items-center gap-4">
                        <StarRating 
                        :read-only="true" 
                        :show-rating="false"
                        :rating="5" 
                        :star-size="30" 
                        text-class="my_star_class" 
                        active-color="#ffb121" 
                        :rounded-corners="true" 
                        :border-width="1" 
                        :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"/>

                        <h6 class="color">5 mesi fa</h6>
                    </div>

                    <!-- Paragraph -->
                    <div class="my_review_paragraph">
                        <p>
                            Locale con ampio spazio all'aperto a 10 metri dal mare. Ottimo per le famiglie con i bambini. Vi suggerisco di assaggiare gli ottimi panzerotti così gustosi e così leggeri.
                        </p>
                    </div>

                    <!-- Reviewer -->
                    <div>
                        <h5 class="color fw-bold">RINO F</h5>
                    </div>

                </div>

                <!-- Review -->
                <div class="my_stars_rating col d-flex flex-column gap-4">
                    <!-- Stars -->
                    <div class="d-flex align-items-center gap-4">
                        <StarRating 
                        :read-only="true" 
                        :show-rating="false"
                        :rating="5" 
                        :star-size="30" 
                        text-class="my_star_class" 
                        active-color="#ffb121" 
                        :rounded-corners="true" 
                        :border-width="1" 
                        :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"/>

                        <h6 class="color">5 mesi fa</h6>
                    </div>

                    <!-- Paragraph -->
                    <div class="my_review_paragraph">
                        <p>
                            Ottimo e storico posto dove consumare pizze o panzerotti e buoni gelati
                        </p>
                    </div>

                    <!-- Reviewer -->
                    <div>
                        <h5 class="color fw-bold">Francesco D</h5>
                    </div>

                </div>

                <!-- Review -->
                <div class="my_stars_rating col d-flex flex-column gap-4">
                    <!-- Stars -->
                    <div class="d-flex align-items-center gap-4">
                        <StarRating 
                        :read-only="true" 
                        :show-rating="false"
                        :rating="5" 
                        :star-size="30" 
                        text-class="my_star_class" 
                        active-color="#ffb121" 
                        :rounded-corners="true" 
                        :border-width="1" 
                        :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"/>

                        <h6 class="color">5 mesi fa</h6>
                    </div>

                    <!-- Paragraph -->
                    <div class="my_review_paragraph">
                        <p>
                            Locale x tutti grandi e piccini, trovi di tutto bar sala giochi braceria pizzeria personale gentile ed accogliente… ho festeggiato qui i miei 40 anni xke adoro i posti rustici all’aperto…. Grazie x tutto
                        </p>
                    </div>

                    <!-- Reviewer -->
                    <div>
                        <h5 class="color fw-bold">Mary S</h5>
                    </div>

                </div>
                

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.my_review_paragraph{
    max-height: 75%;
    overflow-y: auto;
}
.my_stars_rating{
    width: 300px;
    max-height: 300px;
}
</style>