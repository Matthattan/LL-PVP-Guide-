<template>
  <ImageHeader :imageUrl="imageUrl" pageName="Home Page"/>
  <SideBar/>
  <main>
    <h1 style="text-align: center;">
      Welcome to the unofficial guide to Loomian Legacy PVP!
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.s</p>
    </main>
</template>

<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';

export default {
  name: 'App', 
  components: {
    ImageHeader,
    SideBar
  },
  data() {
    return {
      imageUrl: require("@/assets/images/headers/BattleColosseum.png"),
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Russo One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

main {
  font-size: 20px;
  width: 60%;
  margin: auto;
  margin-top: 600px;
  margin-bottom: 200px;
}

</style>
