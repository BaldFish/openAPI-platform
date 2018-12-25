<template>
  <div class="login">
    <div class="login-container">
      <div class="content">
        <p class="title">区块链接口开放平台</p>
        <ul>
          <li>
            <i></i>
            <input type="text" placeholder="请输入用户名">
          </li>
          <li>
            <i></i>
            <input type="text" placeholder="请输入密码">
          </li>
          <li>
            <i></i>
            <input type="text" placeholder="请输入验证码">
            <img @click="getCaptcha" :src="captcha_number" alt="">
          </li>
        </ul>
        <p class="checkError">密码输入错误</p>
        <router-link to="">
          <p class="login-btn">登录</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    components: {},
    data() {
      return {
        captcha_number: "",
        captcha_id: "",
      }
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
      this.$nextTick(() => {
        this.getCaptcha()
      });
    },
    watch: {},
    computed: {},
    methods: {
      //获取图片验证码
      getCaptcha() {
        this.$axios({
          method: 'post',
          url: `${this.$baseURL}/v1/captcha`,
          data: this.$querystring.stringify({})
        }).then(res => {
          this.captcha_number = `data:image/png;base64,${res.data.png}`;
          this.captcha_id = res.data.captcha_id;
        }).catch(error => {
          console.log(error);
        });
      },
    },
  }
</script>

<style scoped lang="stylus">
  .login {
    width: 100%
    height: 100%
    background: url("../../common/images/bg.jpg") no-repeat center
    background-size 100% 100%
    .login-container{
      width: 464px;
      height: 421px;
      background-color: #ffffff;
      border-radius: 30px;
      margin-top 12%
      margin-left 48%
      .content{
        width:326px
        margin 0 auto
        padding-top: 50px;
        .title{
          font-size: 24px;
          color: #333333;
          text-align center
          margin-bottom 55px
        }
        ul{
          li{
            font-size: 14px;
            border-bottom: solid 1px #cecece;
            padding-bottom: 13px;
            margin-top: 13px;
            i{
              margin-right 12px
              position: relative
              top:3px
            }
            img{
              width: 91px;
              height: 32px;
              float right
              margin-right 6px
            }
          }
          li:nth-child(1) i{
            width: 16px;
            height: 18px;
            display inline-block
            background url("../../common/images/icon_user.png") no-repeat center
            background-size 100% 100%
          }
          li:nth-child(2) i{
            width: 16px;
            height: 22px;
            display inline-block
            background url("../../common/images/iicon_password.png") no-repeat center
            background-size 100% 100%
          }
          li:nth-child(3) i{
            width: 16px;
            height: 18px;
            display inline-block
            background url("../../common/images/icon_code.png") no-repeat center
            background-size 100% 100%
          }
        }
        .checkError{
          font-size: 14px;
          color: #e60000;
          margin:14px 0 22px 0
        }
        .login-btn{
          width: 326px;
          height: 40px
          background-color: #1d79fe;
          border-radius: 20px;
          line-height 40px
          text-align center
          color #ffffff
          font-size: 18px;
        }
      }
    }
  }
</style>
