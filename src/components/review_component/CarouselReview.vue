<script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  
  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },

    data(){
        return{
            myCarousel:[
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipMehkDOwGL1KtPOdpbXMin1rgGKjxlaYYAQSnXF=w1080-h608-p-no-v0',
                    url: '#',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipOK1-fhh8buzyQ9n84Oayr4G_scw-lpEjemyw84=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipOiK8RyhBnm0ISarRjEEABUbsdml3I-_hxG1PQs#',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipOiK8RyhBnm0ISarRjEEABUbsdml3I-_hxG1PQs=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipOiK8RyhBnm0ISarRjEEABUbsdml3I-_hxG1PQs',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipMQRVwOxDTNhs7IO_Yr0afZ3wqrfTo7SWPJ1t9v=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipMQRVwOxDTNhs7IO_Yr0afZ3wqrfTo7SWPJ1t9v',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipPMMo4xPq5rPu0ADPrEbo6mAf1U-bNlY5i8EDtK=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipPMMo4xPq5rPu0ADPrEbo6mAf1U-bNlY5i8EDtK',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipNORiWQ7uoy1YZ2dEv7eS0voB3SoStH9Vudd-eq=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipNORiWQ7uoy1YZ2dEv7eS0voB3SoStH9Vudd-eq',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipONdTHRv2TyNvcUmdJ6fpZf7lIqsXpuHUukNOP4=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipONdTHRv2TyNvcUmdJ6fpZf7lIqsXpuHUukNOP4',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipO0l6u7UcB3aOk99VW3CCWsGiVUQHl1mD27660K=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipO0l6u7UcB3aOk99VW3CCWsGiVUQHl1mD27660K',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipNqIsMPNId8vJKTzpmgJuAJVziTyrRr3-EDULIk=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipNqIsMPNId8vJKTzpmgJuAJVziTyrRr3-EDULIk',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipN9V4oClIqc3horfQNNVNPCH5CzzOn_cUeKq-u_=w768-h768-n-o-v1',
                    url: 'https://www.google.com/maps/uv?pb=!1s0x13466919a3d19077%3A0xaa3c2e1027e347f!3m1!7e131!4s!5sLA%20LUCCIOLA%20bar%20pizzeria%20gelateria!15sCgIgAQ&hl=it&imagekey=!1e10!2sAF1QipN9V4oClIqc3horfQNNVNPCH5CzzOn_cUeKq-u_',
                },
                {
                    img: 'https://lh3.googleusercontent.com/p/AF1QipP1PwABXVE0O5K7PDzz_uXnM3qQyPwL2lTsU40t=s1280-p-no-v1',
                    url: 'https://lh3.googleusercontent.com/p/AF1QipP1PwABXVE0O5K7PDzz_uXnM3qQyPwL2lTsU40t=mm,37,22,18',
                },
            ]
        }
    }
  }
</script>

<template #slides>
    <carousel :items-to-show="1.75" :wrapAround="true" :autoplay="5000">
      <slide v-for="slide in myCarousel" :key="slide">
        <a :href="slide.url">
            <img class="my_images img-fluid" :src="slide.img" alt="">
        </a>
      </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
</template>
  
<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
</style>
  
  