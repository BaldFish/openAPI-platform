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
          <p>luo.chen@cnlaunch.com</p>
          <el-button type="text" @click="dialogPwdVisible = true">修改登录密码&nbsp;></el-button>
          <el-dialog title="修改登录密码" :visible.sync="dialogPwdVisible">
            <el-form :model="form">
              <el-form-item label="旧密码：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入旧密码"></el-input>
              </el-form-item>
              <el-form-item label="新密码：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入6～20位包含中英文字符密码"></el-input>
              </el-form-item>
              <el-form-item label="重复新密码：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" placeholder="请重复密码"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogPwdVisible = false">确 定</el-button>
              <el-button @click="dialogPwdVisible = false" class="btn-cancel">忘记密码</el-button>
            </div>
          </el-dialog>
        </li>
        <li class="clearfix">
          <label>公司/事业部</label>
          <p>深圳市元征科技股份有限公司-大数据团队</p>
        </li>
        <li class="clearfix">
          <label>绑定手机</label>
          <el-button type="text" @click="toBind" class="to-bind">去绑定&nbsp;></el-button>
          <el-dialog title="绑定手机号" :visible.sync="dialogBindVisible" class="bind-phone">
            <div v-if="isSuccess">
              <el-form :model="form">
                <el-form-item label="输入绑定手机号码：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="图形验证码：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入图形验证码"></el-input>
                  <img src="@/common/images/icon_success.png" alt="" class="img-code">
                </el-form-item>
                <el-form-item label="短信验证码：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入短信验证码"></el-input>
                  <span class="send-phone">发送</span>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="bindPhone">确 定</el-button>
              </div>
            </div>
            <div v-else>
              <div class="bind-success">
                <i></i>
                <p>手机号绑定成功</p>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogBindVisible = false">确 定</el-button>
              </div>
            </div>
          </el-dialog>
        </li>
        <li class="clearfix">
          <label>APIKEY</label>
          <p>5a6eb317e2794d3441d45181</p>
        </li>
        <li class="clearfix">
          <label>AESKEY</label>
          <p>weene3Geng4ua0ag</p>
        </li>
        <li class="clearfix">
          <label>账号余额</label>
          <p>25633.00</p>
          <el-button type="text" @click="dialogWarningVisible = true">金额预警&nbsp;></el-button>
          <el-dialog title="预警设置" :visible.sync="dialogWarningVisible">
            <el-form :model="form">
              <el-form-item label="是否开启：" :label-width="formLabelWidth">
                <div class="radio-list">
                  <label>
                    <input type="radio" name="radio" checked>
                    <i></i>
                    <span>是</span>
                  </label>
                  <label>
                    <input type="radio" name="radio">
                    <i></i>
                    <span>否</span>
                  </label>
                </div>
              </el-form-item>
              <el-form-item label="预警金额：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入预警金额"></el-input>
              </el-form-item>
              <el-form-item label="预警手机号：" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入预警手机号"></el-input>
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
        form: {
          name: '',
        },
        formLabelWidth: '120px'
      }
    },
    created() {
    },
    beforeMount(){
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {
      //去绑定
      toBind(){
        this.dialogBindVisible = true;
        this.isSuccess = true
      },
      //绑定手机号
      bindPhone(){
        this.isSuccess = false
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
      padding: 10px 20px 20px;
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
