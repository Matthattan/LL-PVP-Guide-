<template>
    <ImageHeader :imageUrl="imageUrl" pageName="Common Questions"/>
    <SideBar/>
    <!-- Your main content here -->
    <main>
      <h1 style="text-align: center;">
      Common Questions
    </h1>
    <p> If it's your first time stepping into Loomian Legacy PVP, It's understandable if you have an overwhelming amount of questions that are daunting to ask other people. 
      This page tries to cover many basic questions to ease your concerns. 
      <br>
      <br>
      If any question you have is not listed here, feel free to ask members in the community; they're more than happy to ask, so long as you're respectful. You can also suggest the question be answered here!
    </p>
      <Questions/>
    </main>
  </template>
  <script>
  import SideBar from './SideBar.vue';
  import ImageHeader from './Header.vue';
  import Questions from './Questions.vue';
  
  export default {
    name: 'App', 
    components: {
      ImageHeader,
      SideBar,
      Questions
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
  margin-top: 600px;
  margin-bottom: 200px;
}


  </style>
  