<template>
  <div class="account">
    <div class="account-title">
      <i></i>
      <p>账号资料</p>
    </div>
    <div class="account-details">
      <ul>
        <li class="clearfix">
          <label>注册账号</label>
          <p>{{accountInfo.email}}</p>
          <el-button type="text" @click="dialogPwdVisible = true">修改登录密码&nbsp;></el-button>
          <el-dialog title="修改登录密码" :visible.sync="dialogPwdVisible">
            <el-form :model="formPwd">
              <el-form-item label="旧密码：" :label-width="formLabelWidth">
                <el-input type="password" v-model="formPwd.old" autocomplete="off" placeholder="请输入旧密码"></el-input>
              </el-form-item>
              <el-form-item label="新密码：" :label-width="formLabelWidth">
                <el-input type="password" v-model="formPwd.new" autocomplete="off" @blur="checkPwd" placeholder="请输入6～20位包含中英文字符密码"></el-input>
              </el-form-item>
              <el-form-item label="重复新密码：" :label-width="formLabelWidth">
                <el-input type="password" v-model="formPwd.newRepeat" autocomplete="off" @blur="checkPwd" placeholder="请重复密码"></el-input>
                <span class="error-pwd">{{errorPwd}}</span>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="modifyPassword">确 定</el-button>
              <el-button @click="dialogPwdVisible = false" class="btn-cancel">取 消</el-button>
            </div>
          </el-dialog>
        </li>
        <li class="clearfix">
          <label>公司/事业部</label>
          <p>{{accountInfo.company}}</p>
        </li>
        <li class="clearfix">
          <label>绑定手机</label>
          <p style="margin-right: 20px">{{accountInfo.phone.slice(3)}}</p>
          <el-button type="text" @click="dialogBindVisible = true" class="to-bind" v-if="!accountInfo.phone">去绑定&nbsp;></el-button>
          <el-button type="text" @click="dialogBindVisible = true" class="to-bind" v-else>去换绑&nbsp;></el-button>
          <el-dialog title="绑定手机号" :visible.sync="dialogBindVisible" class="bind-phone">
            <div v-if="isSuccess">
              <el-form :model="formBindPhone">
                <el-form-item label="输入绑定手机号码：" :label-width="formLabelWidth">
                  <el-input v-model="formBindPhone.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="图形验证码：" :label-width="formLabelWidth">
                  <el-input v-model="formBindPhone.captcha_number" autocomplete="off" placeholder="请输入图形验证码"></el-input>
                  <img :src="captcha_img" alt="" class="img-code" @click="getCaptcha">
                </el-form-item>
                <el-form-item label="短信验证码：" :label-width="formLabelWidth">
                  <el-input v-model="formBindPhone.code" autocomplete="off" placeholder="请输入短信验证码"></el-input>
                  <span class="send-phone" v-if="isSend" @click="getCode">发送</span>
                  <span class="send-phone count_down" v-else>{{second}}s</span>
                  <p class="error-pwd">{{errorPhone}}</p>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="bindPhone">确 定</el-button>
              </div>
            </div>
            <div v-else>
              <div class="bind-success">
                <i></i>
                <p v-if="!accountInfo.phone">手机号绑定成功</p>
                <p v-else>手机号换绑成功</p>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogBindVisible = false">确 定</el-button>
              </div>
            </div>
          </el-dialog>
        </li>
        <li class="clearfix">
          <label>APIKEY</label>
          <p>{{accountInfo.apikey}}</p>
        </li>
        <li class="clearfix">
          <label>AESKEY</label>
          <p>{{accountInfo.aeskey}}</p>
        </li>
        <li class="clearfix">
          <label>账号余额</label>
          <p>{{accountInfo.balance}}</p>
          <el-button type="text" @click="dialogWarningVisible = true">金额预警&nbsp;></el-button>
          <el-dialog title="预警设置" :visible.sync="dialogWarningVisible">
            <el-form :model="formWarning">
              <el-form-item label="是否开启：" :label-width="formLabelWidth">
                <div class="radio-list">
                  <label>
                    <input type="radio" name="radio" v-model="formWarning.status" value="1">
                    <i></i>
                    <span>是</span>
                  </label>
                  <label>
                    <input type="radio" name="radio" v-model="formWarning.status" value="2">
                    <i></i>
                    <span>否</span>
                  </label>
                </div>
              </el-form-item>
              <el-form-item label="预警金额：" :label-width="formLabelWidth">
                <el-input v-model="formWarning.amount" autocomplete="off" placeholder="请输入预警金额"></el-input>
              </el-form-item>
              <el-form-item label="预警手机号：" :label-width="formLabelWidth">
                <el-input v-model="formWarning.phone" autocomplete="off" placeholder="请输入预警手机号"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogWarningVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <router-link to="" class="to-flow">
            <span>交易明细&nbsp;></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "account",
    components: {},
    data() {
      return {
        dialogPwdVisible: false,
        dialogWarningVisible: false,
        dialogBindVisible: false,
        isSuccess: true,
        formPwd: {
          old: '',
          new: '',
          newRepeat: '',
        },
        formBindPhone: {
          phone: '',
          captcha_number: '',
          code: '',
        },
        form: {
          name: '',
        },
        formWarning: {
          status: '1',
          amount: '',
          phone: '',
        },
        formLabelWidth: '120px',
        accountInfo:"",
        userInfo:"",
        errorPwd:"",
        errorPhone:"",
        isSend: true,
        captcha_img:"",
        captcha_id:"",
        second: 60,// 发送验证码倒计时

      }
    },
    created() {
    },
    beforeMount(){
    },
    mounted() {
      this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      //获取图片验证码
      this.getCaptcha();
      //获取用户信息
      this.getAccountInfo();
    },
    watch: {},
    computed: {},
    methods: {
      //获取用户信息
      getAccountInfo() {
        this.$axios({
          method: 'GET',
          url: `${this.$baseURL}/v1/platform/user/info/${this.userInfo.user_id}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": this.userInfo.token,
          }
        }).then(res => {
          this.accountInfo = res.data
        }).catch(error => {
          console.log(error);
        })
      },
      //修改密码
      modifyPassword() {
        if (!this.errorPwd){
          this.formPwd.user_id = this.userInfo.user_id;
          this.$axios({
            method: 'PATCH',
            url: `${this.$baseURL}/v1/platform/user/passwd/change`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Access-Token": this.userInfo.token,
            },
            data: this.$querystring.stringify(this.formPwd)
          }).then(res => {
            this.dialogPwdVisible = false
          }).catch(error => {
            console.log(error);
          })
        }
      },
      //校验密码
      checkPwd(){
        if (this.formPwd.new != this.formPwd.newRepeat){
          this.errorPwd = "两次输入的密码不正确"
        } else {
          this.errorPwd = ""
        }
      },
      //关闭modal
      closeModal(){

      },
      //获取图片验证码
      getCaptcha() {
        this.$axios({
          method: 'post',
          url: `${this.$baseURL}/v1/captcha`,
          data: this.$querystring.stringify({})
        }).then(res => {
          this.captcha_img = `data:image/png;base64,${res.data.png}`;
          this.formBindPhone.captcha_id = res.data.captcha_id;
        }).catch(error => {
          console.log(error);
        });
      },
      //获取短信验证码
      getCode() {
        if(this.formBindPhone.phone){
          //倒计时
          let me = this;
          me.isSend = false;
          let interval = window.setInterval(function () {
            if ((me.second--) <= 0) {
              me.second = 60;
              me.isSend = true;
              window.clearInterval(interval);
            }
          }, 1000);
          //get短信验证码
          this.$axios({
            method: 'post',
            url: `${this.$baseURL}/v1/sms/code`,
            data: this.$querystring.stringify({
              phone: "+86" + this.formBindPhone.phone, //手机号
              type: 3 //1-注册，2-修改密码, 3-登录
            })
          }).then(res => {
          }).catch(error => {
            console.log(error);
          })
        }
      },
      //绑定手机号
      bindPhone(){
        this.formBindPhone.user_id = this.userInfo.user_id;
        if(this.formBindPhone.phone){
          this.formBindPhone.phone = "+86" + this.formBindPhone.phone;
        }

        console.log(this.formBindPhone)

        this.$axios({
          method: 'PATCH',
          url: `${this.$baseURL}/v1/platform/user/phone/change`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": this.userInfo.token,
          },
          data: this.$querystring.stringify(this.formBindPhone)
        }).then(res => {


          //console.log(res.data)
          this.isSuccess = false
        }).catch(error => {

          //this.errorPhone = res.data
          console.log(error,"error");
        })



      },

    },
  }
</script>

<style scoped lang="stylus">
  .account {
    width:1200px
    height: 450px;
    margin: 0 auto
    border: solid 1px #bfbfbf;
    margin-top 100px
    margin-bottom 150px
    .account-title{
      height: 70px;
      line-height: 70px
      background-color: #f6f8fd;
      font-size: 20px;
      color: #333333;
      i{
        width: 36px;
        height: 36px;
        display inline-block
        background url("../../common/images/icon_account.png") no-repeat center
        background-size 100% 100%
        margin: 17px
        float left
      }
    }
    .account-details{
      ul{
        padding-top: 40px;
        padding-left: 50px;
        li{
          margin-bottom 30px
          label{
            font-size: 18px;
            color: #333333;
            float left
            display inline-block
            width: 160px;
            line-height: normal;
          }
          p{
            font-size: 16px;
            color: #666666;
            float left
            margin-top: 4px;
          }
          .to-flow{
            font-size: 14px;
            color: #e60000;
          }
          .to-bind{
            padding-left 0
          }
        }
      }
    }
  }
</style>
<style lang="stylus">
  .el-button{
    padding: 4px 20px;
  }
  .el-button--text, .el-button--text:hover{
    color: #e60000 !important;
  }
  .el-dialog{
    width: 512px;
    background-color: #ffffff;
    border-radius: 30px;
    .el-dialog__header{
      text-align: center;
    }
    .el-dialog__body{
      padding-bottom 0
      .el-form{
        label{
          font-size: 16px;
          color: #333333;
        }
      }
      .el-form-item__content{
        width: 255px;
        height: 40px;
        .error-pwd{
          color: red
        }
      }
      .radio-list{
        label{
          float left !important
          width: 100px !important
          position: relative;
          top: 6px;
          margin-top 4px
          cursor pointer
        }
        span{
          position: relative;
          bottom: 3px;
          font-size: 16px;
          color: #333333;
        }
        i{
          width: 20px;
          height: 20px;
          display inline-block
          background url("../../common/images/radio_unchecked.png") no-repeat center
          background-size 100% 100%
        }
        input{
          display none
        }
        input:checked + i{
          background url("../../common/images/radio_checked.png") no-repeat center
          background-size 100% 100%
        }
      }
    }
    .el-dialog__footer{
      text-align: center;
      padding: 18px 20px 20px;
      button{
        width: 100px;
        height: 39px;
        border-radius: 10px;
      }
      .btn-cancel{
        margin-left 90px
      }
    }
  }
  .bind-phone{
    label{
      width 168px !important
    }
    .el-form-item__content{
      float left
      margin-left 0 !important
    }
    .dialog-footer{
      padding: 18px 20px 20px;
      text-align: center;
      box-sizing: border-box;
      .el-button--primary{
        width: 100px;
        height: 39px;
        border-radius: 10px;
      }
    }
    .img-code{
      width: 58px;
      height: 26px;
      cursor pointer
      float: right;
      position: relative;
      right: 8px;
      top: -34.5px;
    }
    .send-phone{
      width: 58px;
      height: 26px;
      line-height 26px
      text-align center
      display inline-block
      border-radius: 4px;
      border: solid 1px #2980fe;
      font-size: 14px;
      color: #1d79fe;
      cursor pointer
      float: right;
      position: relative;
      right: 8px;
      top: -34.5px;
    }
    .count_down{
      background-color: #7d7d7d;
      color: #ffffff;
      border: solid 1px #7d7d7d;
    }
    .bind-success{
      i{
        width: 48px;
        height: 48px;
        display inline-block
        background url("../../common/images/icon_success.png") no-repeat center
        background-size 100% 100%
        margin-left 212px
      }
      p{
        text-align center
        font-size: 24px !important;
        color: #333333 !important;
        width:100%
        margin: 20px 0 60px 0;
        margin-top 20px !important
      }
    }
  }
</style>
