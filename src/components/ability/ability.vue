<template>
  <div class="ability">
    <div class="container" @click="getAbilityList" v-for="item of abilityList" :key="item.api_type_id">
      <div class="title">
        <i></i>
        <p>{{item.api_type_name}}</p>
      </div>
      <div class="details">
        <ul>
          <li v-for="li of item.list" :key="li.api_id">
            <label>{{li.api_name}}</label>
            <!--<router-link to="">
              <span>接入能力</span>
            </router-link>-->
            <p>{{li.api_desc}}</p>
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
      return {
        abilityList:[],
        token:"",
      }
    },
    created() {
    },
    beforeMount() {
      this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjMyNDMzMzUsInVzZXJfaWQiOiI1YTZlYjMxN2UyNzk0ZDM0NDFkNDUxODEiLCJkZXZpY2VfaWQiOiIxIn0.DrBCErsD9rw5ac0JrLdYgH_gO9hUk-kjQJ_cu2wdwiE";
      this.getAbilityList()
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {
      //获取能力库列表
      getAbilityList(){
        this.$axios({
          method: 'GET',
          url: `${this.$baseURL}/v1/platform/apis`,
          headers: {
            'X-Access-Token': this.token,
          }
        }).then(res => {
          this.abilityList=res.data.data
        }).catch(error => {
          console.log(error)
        })
      }
    },
  }
</script>

<style scoped lang="stylus">
  .ability {
    width: 1200px
    margin: 0 auto
    .container{
      margin-top 20px
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
              line-height 14px
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
