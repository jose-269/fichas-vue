<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
    <div class="waze-button d-md-none">
      <a href="https://ul.waze.com/ul?ll=-33.45408800%2C-70.60303410&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">
      <i class="fab fa-waze fa-3x p-2"></i></a>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  computed: {
    ...mapState(["data"])
  },
  created() {
    this.data;
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: Lato, sans-serif;
  background-color: #efefef;
  box-sizing: border-box;
}

.waze-button {
  position: fixed;
  right: 0;
  bottom: 3.125rem;
  z-index: 999;
  background-color: #fff;
  width: fit-content;
  // margin-left: auto;
  border: 4px solid #42D5FF;
  border-right: 2px;
  border-radius: 13px 0 0 13px;
  a {
    color: #395359;
  }
}
</style>
