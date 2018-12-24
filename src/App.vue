<template>
  <div id="app">
    <div class="head-wrap" ref="head">
      <div class="head">
        <img src="@/common/images/logo_header.png" alt="">
        <ul class="">
          <li class="nav">
            <span></span>
            <router-link to="/home">首页</router-link>
          </li>
          <li class="nav">
            <span></span>
            <router-link to="/apiList">接口统计</router-link>
          </li>
          <li class="nav">
            <span></span>
            <router-link to="/ability">能力库</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {
      }
    },
    created() {
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {
    },
  };
</script>

<style lang="stylus">
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .head-wrap {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    .head {
      position relative
      box-sizing: border-box
      width: 1200px;
      margin: 0 auto;
      padding 4px 35px
      font-size 0
      img {
        vertical-align: top
      }
      ul {
        width 919px
        display inline-block
        text-align right
        margin-top 14px
        .nav {
          display: inline-block;
          margin-right 70px
          font-size 0px
          box-sizing: border-box
          span {
            display inline-block
            width: 4px;
            height: 4px;
            background-color: #333333;
            border-radius 2px
            margin-right 8px
          }
          & > a {
            display: inline-block;
            font-size 14px
            color #333333
            box-sizing border-box
            line-height 54px
            &.router-link-active, &:hover {
              color: #333333;
              border-bottom 1px solid #5226f3
            }
          }
        }
        .nav:last-child {
          margin-right 0
        }
      }
    }
  }
  
  .main {
    flex: 1;
    box-sizing: border-box;
    margin: 0 auto;
    width 100%
    min-width 1200px
  }
  
</style>
