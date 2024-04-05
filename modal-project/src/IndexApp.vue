<template>
  <ImageHeader :imageUrl="imageUrl" :pageName="pageName"/>
  <SideBar/>
  <!-- Your main content here -->
</template>

<script>
import SideBar from './components/SideBar.vue';
import ImageHeader from './components/Header.vue';

export default {
  name: 'App', 
  components: {
    ImageHeader,
    SideBar
  },
  data() {
    return {
      imageUrl: require("@/assets/images/headers/BattleColosseum.png"),
      pageName: "Home Page"
    }
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
