<template>
  <div>
    <v-header></v-header>
    <div class="nav">
      <div class="sell">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="sell">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="sell">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import header from './components/header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .nav
    display: flex
    text-align: center
    height: 40px
    line-height: 40px
    width: 100%
    .sell
      flex: 1
      font-weight: bold
    .active
      color: #ff4400
</style>