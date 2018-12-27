<template>
  <div class="ability">
    <div class="container">
      <div class="title">
        <i></i>
        <p>ERC21</p>
      </div>
      <div class="details">
        <ul>
          <li>
            <label>资产创建接口</label>
            <router-link to="">
              <span>接入能力</span>
            </router-link>
            <p>只是一种代币设计标准。我们都知道ERC20是基于以太坊存在的，以太坊原生代币是ETH。以太坊不但可以发行自己的原生代币还能发行其他的代币</p>
          </li>
          <li>
            <label>记录存证接口</label>
            <router-link to="">
              <span>接入能力</span>
            </router-link>
            <p>只是一种代币设计标准。我们都知道ERC20是基于以太坊存在的，以太坊原生代币是ETH。以太坊不但可以发行自己的原生代币还能发行其他的代币</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ability",
    components: {},
    data() {
      return {}
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .ability {
    width: 1200px
    margin: 20px auto
    .container{
      height: 350px;
      border: solid 1px #bfbfbf;
      .title{
        font-size: 20px;
        color: #333333;
        height: 70px;
        line-height 70px
        background-color: #f6f8fd;
        i{
          width: 36px;
          height: 36px;
          display inline-block
          background url("../../common/images/icon_e.png") no-repeat center
          background-size 100% 100%
          margin: 17px
          float left
        }
      }
      .details{
        ul{
          li{
            width: 398px;
            height: 240px;
            float left
            margin-top 20px
            label{
              font-size: 20px;
              color: #ffffff;
              margin: 40px 95px 40px 40px;
              display inline-block
            }
            a{
              font-size: 16px;
              color: #1d79fe;
              span{
                width: 110px;
                height: 38px;
                display inline-block
                line-height 38px
                text-align center
                background-color: #ffffff;
                border-radius: 10px;
              }
            }
            p{
              font-size: 12px;
              color: #ffffff;
              margin: 0 40px
            }
          }
          li:nth-child(1){
            background url("../../common/images/ability_bg_01.png") no-repeat center
            background-size 100% 100%
            margin-left 162px
          }
          li:nth-child(2){
            background url("../../common/images/ability_bg_02.png") no-repeat center
            background-size 100% 100%
            float right
            margin-right 162px
            a{
              color: #f75e28;
            }
          }
        }
      }
    }
  }
</style>
