<script>
// Animate CSS
import 'animate.css';

  // Imports
  import Navbar from './components/Navbar.vue';
  import Front from './components/Front.vue';
  import Review from './components/Review.vue';
  import Contacts from './components/Contacts.vue';
  import Footer from './components/Footer.vue';

  export default{
    components:{
      Navbar,
      Front,
      Review,
      Contacts,
      Footer,
    }
  }
</script>

<template>
  <Navbar/>
  <main>
    <Front id="galleria"/>
    <Review/>
    <Contacts/>
    <Footer />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
