<template>
  <div id="app">
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "./components/content/mainTabbar.vue";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>

<style>
@import url("assets/css/base.css");
</style>
