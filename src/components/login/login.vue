<template>
  <div class="login">
    <div class="login-container">
      <div class="content">
        <p class="title">元征区块链开放平台</p>
        <ul>
          <li>
            <i></i>
            <input type="text" v-model="user_name" placeholder="请输入用户名">
          </li>
          <li>
            <i></i>
            <input type="password" v-model="passwd" placeholder="请输入密码">
          </li>
          <li>
            <i></i>
            <input type="text" v-model="captcha_number" placeholder="请输入验证码">
            <img @click="getCaptcha" :src="captcha_img" alt="">
          </li>
        </ul>
        <p class="checkError">{{errorMsg}}</p>
        <p class="login-btn" @click="login">登录</p>
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
        user_name:"", //用户名
        passwd:"",//用户密码
        captcha_number: "",//图形验证码
        captcha_id: "",//图形验证码id
        captcha_img: "",//图形
        errorMsg:"",//错误信息
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
    computed: {
      uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
      }
    },
    methods: {
      //获取图片验证码
      getCaptcha() {
        this.$axios({
          method: 'post',
          url: `${this.$baseURL}/v1/captcha`,
          data: this.$querystring.stringify({})
        }).then(res => {
          this.captcha_img = `data:image/png;base64,${res.data.png}`;
          this.captcha_id = res.data.captcha_id;
        }).catch(error => {
          console.log(error);
        });
      },
      //登录
      login() {
        let loginData = {
          user_name: this.user_name, //用户名
          passwd: this.passwd, //密码
          captcha_id: this.captcha_id, //图片验证码ID
          captcha_number: this.captcha_number, //图片验证码
          device_id: this.uuid, //设备ID
        };
        this.$axios({
          method: 'post',
          url: `${this.$baseURL}/v1/platform/user/login`,
          data: this.$querystring.stringify(loginData)
        }).then(res => {
          window.sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
          this.$router.push({path: '/home'});
        }).catch(error => {
          this.errorMsg = error.response.data.message
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
            input{
              outline none
            }
            img{
              width: 91px;
              height: 32px;
              float right
              margin-right 6px
              cursor pointer
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
          height: 14px
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
          cursor pointer
        }
      }
    }
  }
</style>
