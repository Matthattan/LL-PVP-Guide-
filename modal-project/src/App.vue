<template>
  <div>
    <ImageHeader/>
    <SideBar/>
    <!-- Your main content here -->
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import ImageHeader from './components/Header.vue';

export default {
  name: 'App', 
  components: {
    ImageHeader,
    SideBar
  }
}
</script>

<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
