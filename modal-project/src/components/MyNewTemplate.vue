<template>
    <header :style="headerStyle">
      <h1>Loomian Legacy PVP Website: <br> {{ headings.Index }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NewTemplate',
    data() {
      return {
        headings: {
          Index: "Home Page",
          Items: "Items Page"
        },
        scrolled: false
      };
    },
    computed: {
      headerStyle() {
        return {
          padding: this.scrolled ? '10px' : '50px 10px',
          color: this.scrolled ? 'black' : 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          position: 'fixed',
          top: 0,
          width: '100%',
          height: this.scrolled ? '100px' : '56rem',
          transition: '0.5s',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: 'auto',
          lineHeight: this.scrolled ? '2rem' : '3rem',
          zIndex: 1
        };
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 50;
      }
    }
  };
  </script>
  
  <style scoped>
  header {
    transition: 0.5s;
    background-image: url("../assets/BattleColosseum.png");
  }
  </style>
  