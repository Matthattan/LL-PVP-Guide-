<template>
  <header class="top-container" :style="{backgroundImage: `url(${imageUrl})`}">
    <h1>{{ pageName }}</h1>
  </header>
  <div :class="{ 'sticky': isSticky}" id="myHeader" ref="header">
    <h2> Loomian Legacy PVP Website: </h2>
  </div>
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
      sticky: 0,
      isSticky: false
    };
  },
  mounted() {
    this.sticky = this.$refs.header.offsetTop;
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > this.sticky) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
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
  height: 100%;
  position: sticky;
  top: 0;
  transition: 0.2s;
  padding: 325px 10px;
  font-size: 30px;
}

#myHeader {
  text-align: center;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky + .content {
  padding-top: 102px;
}

</style>