<template>
  <header class="top-container" :style="{backgroundImage: `url(${imageUrl})`}" @scroll="handleScroll">
    <h1>Loomian Legacy PVP Website</h1>
  </header>
    <h2 class="sticky" >{{ pageName }}</h2>
</template>
  
<script>
export default {
  name: 'ImageHeader',
  props: {
    imageUrl: String,
    pageName: String
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this
      } else {
        this
      }
    }
  }
};
</script>
<style scoped>

* {
  font-family: 'Russo One';
}

.top-container {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

h1 {
  margin: auto;
}

header {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  height: 100vh;
  transition: 0.2s;
  font-size: 30px;
}

.sticky {
  background-color: #004691; 
  text-align: center;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 20px 0;
  margin: auto;
  margin-bottom: 20px;
}

</style>