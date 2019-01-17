<template>
  <div id="app">
    <div class="head-wrap" ref="head" v-if="isShowTopSearch">
      <div class="head">
        <span>区块链接口开放平台</span>
        <ul class="">
          <li class="nav">
            <router-link to="/home">首页</router-link>
          </li>
          <li class="nav">
            <router-link to="/apiList">接口统计</router-link>
          </li>
          <li class="nav">
            <router-link to="/ability">能力库</router-link>
          </li>
        </ul>
        <div class="no_login" v-if="isLogin">
          <a href="javascript:void(0)">登录</a>
        </div>
        <div class="login" v-if="!isLogin">
          <div @click.stop="toggle">
            <img src="@/common/images/bg.jpg" class="user-head" alt="">
            admin&nbsp;
            <img src="@/common/images/down.png" alt="">
          </div>
          <ul v-if="switchover" @mouseleave.stop="leaveUl">
            <li>
              <router-link to="/account">账户信息</router-link>
            </li>
            <li @click.stop="logOut">退出</li>
          </ul>
        </div>
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
        isShowTopSearch: true,
        isLogin: false,
        switchover: false,
      }
    },
    created() {
    },
    beforeMount() {
      if(!sessionStorage.userInfo){
        this.$router.push("/login")
      }
    },
    mounted() {
      if (this.$route.path == "/login") {
        this.isShowTopSearch = false;
      }
    },
    watch: {
      //监听路由变化执行方法
      $route(to, from) {
        if (from.path == "/login") {
          this.isShowTopSearch = true;
        }
        if (to.path == "/login") {
          this.isShowTopSearch = false;
        }
      }
    },
    computed: {},
    methods: {
      toggle() {
        this.switchover = !this.switchover
      },
      leaveUl() {
        this.switchover = false
      },
      logOut() {
        let sessionsId = JSON.parse(sessionStorage.getItem("userInfo")).session_id;
        this.$axios({
          method: 'DELETE',
          url: `${this.$baseURL}/v1/platform/user/signout/${sessionsId}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }).then(res => {
          sessionStorage.removeItem('userInfo');
          this.switchover = false;
          location.reload()
        }).catch(error => {
          console.log(error);
        })
      },
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
    /*position: absolute;
    z-index: 1000;*/
    width: 100%;
    height: 100px;
    background-color: #2e3644;
    .head {
      position relative
      box-sizing: border-box
      width: 1200px;
      height: 100px;
      margin: 0 auto;
      padding 4px 0
      font-size 20px;
      color #ffffff
      span{
        font-weight 700
        position: relative;
        top: 6px;
      }
      ul {
        width 790px
        display inline-block
        text-align right
        margin-top 14px
        .nav {
          display: inline-block;
          margin-right 70px
          font-size: 16px;
          box-sizing: border-box
          & > a {
            display: inline-block;
            font-size: 16px;
            color #ffffff
            box-sizing border-box
            line-height 54px
            &.router-link-active, &:hover {
              color #ffffff
              border-bottom 1px solid #ffffff
            }
          }
        }
        .nav:last-child {
          margin-right 0
        }
      }
      .no_login {
        vertical-align top
        display inline-block
        margin-right 20px
        margin-left 58px
        width 140px
        padding-top: 29px;
        a {
          font-size 16px
          margin-left 28px
          color: #ffffff;
        }
      }
      .login {
        display inline-block
        cursor pointer
        margin-right 20px
        margin-left 58px
        width 140px
        position relative
        color #ffffff
        font-size 16px
        img {
          width: 13px;
          height: 9px;
        }
        .user-head{
          width: 28px;
          height: 28px;
          border-radius 50%
          position: relative;
          top: 8px;
          margin-right: 5px;
        }
        ul {
          background-color: #fff;
          position: absolute;
          top: 64px;
          right: 20px;
          text-align: center;
          width: 130px;
          font-size: 16px;
          box-shadow: 0 5px 15px 0 rgba(175, 192, 209, 0.55);
          li {
            height 40px
            line-height 40px
            color #333333
            a {
              color #333333
            }
          }
          li:hover {
            color #1d79fe
            a {
              color #1d79fe
            }
          }
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
