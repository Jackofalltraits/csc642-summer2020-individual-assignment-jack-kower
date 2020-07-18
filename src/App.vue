<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Forms from './components/Forms.vue';
import Results from './components/Results.vue'
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
    'Forms' : Forms,
    'Results' : Results
  }
}
</script>

<style>
#app {
  background-color: #FFFFA0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #237ed8;
  margin-top: 60px;
}

</style>
