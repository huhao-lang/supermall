<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

// 轮播图
import HomeSwiper from "./childComps/HomeSwiper.vue";
import { getHomeMultidata } from "network/home";
import RecommendView from "./childComps/Details.vue";
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.recommends);
    });
  },
};
</script>

<style>
.nav-bar {
  background: #ff8e98;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);
}
</style>