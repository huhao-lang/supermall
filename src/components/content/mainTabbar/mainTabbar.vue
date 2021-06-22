<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item_img" src="~assets/img/tabbar/home.svg" />
        <img slot="item_img2" src="~assets/img/tabbar/home_active.svg" />
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item_img" src="~assets/img/tabbar/category.svg" />
        <img slot="item_img2" src="~assets/img/tabbar/category_active.svg" />
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item_img" src="~assets/img/tabbar/shopcart.svg" />
        <img slot="item_img2" src="~assets/img/tabbar/shopcart_active.svg" />
        <div slot="item_text">购物</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item_img" src="~assets/img/tabbar/profile.svg" />
        <img slot="item_img2" src="~assets/img/tabbar/profile_active.svg" />
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "~assets/css/base.css";
</style>
