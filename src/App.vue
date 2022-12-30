<script>
// Animate CSS
import 'animate.css';

  // Imports
  import Navbar from './components/Navbar.vue';
  import Front from './components/Front.vue';
  
  import Contacts from './components/Contacts.vue';
  import Footer from './components/Footer.vue';

  export default{
    components:{
      Navbar,
      Front,

      Contacts,
      Footer,
    }
  }
</script>

<template>
  <Navbar/>
  <main>
    <Front id="galleria"/>
    <Contacts/>
    <Footer />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
