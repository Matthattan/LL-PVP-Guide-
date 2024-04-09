<template>
  <ImageHeader :imageUrl="imageUrl" pageName="Resources"/>
  <SideBar/>
  <!-- Your main content here -->
  <main>
    <LLResources/>
  </main>
</template>
<script>
import SideBar from './SideBar.vue';
import ImageHeader from './Header.vue';
import LLResources from './LLResources.vue';

export default {
  name: 'App', 
  components: {
    ImageHeader,
    SideBar,
    LLResources,
  },
  data() {
    return {
      imageUrl: require("@/assets/images/headers/InsideColosseum.jpg"),
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
margin-bottom: 200px;
}


</style>
