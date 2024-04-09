<template>
  <header :class="{ 'sticky': isSticky}" :style="{backgroundImage: `url(${imageUrl})`}" ref="header">
    <h1>Loomian Legacy PVP Website: <br> {{ pageName }}</h1>
  </header>
</template>
  
<script>
export default {
  name: 'ImageHeader',
  props: {
    imageUrl: String,
    pageName: String
  },
  data() {
    return {
      isSticky: false,
      headerOffsetTop: null
    };
  },
  mounted() {
    this.headerOffsetTop = this.$refs.header.offsetTop;    
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check if the window scroll position is greater than header offset top
      if (window.scrollY > this.headerOffsetTop) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};
</script>
<style scoped>

h1 {
  margin: auto;
}

header {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  height: 100%;
  position: sticky;
  top: 0;
  transition: 0.2s;
  padding: 325px 10px;
  background-color: aqua;
  font-size: 30px;
}

.sticky {
  font-size: 18px;
  padding: 10px 10px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
}

</style>