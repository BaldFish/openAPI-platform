<template>
  <div class="home">
    <div class="home-user">
      <p>欢迎您，<span>z.chen@cnlaunch.com</span></p>
      <p>账号余额：<span>55000.00</span></p>
    </div>
    <div class="home-ability">
      <table>
        <caption>
          <div class="table-title">
            <i></i>
            <p>已接入能力</p>
          </div>
          <div class="table-handle">
            <div class="add-ability">
              <router-link to="/">
                <i></i>
                <p>新增能力</p>
              </router-link>
            </div>
            <div class="del-ability">
              <router-link to="/">
                <i></i>
                <p>删除能力</p>
              </router-link>
            </div>
          </div>
        </caption>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>能力</th>
            <th>API</th>
            <th>本月调用量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label>
                <input type="checkbox" name="checkbox">
                <i></i>
              </label>
            </td>
            <td>ERC721</td>
            <td>资产创建接口</td>
            <td>3070</td>
          </tr>
          <tr>
            <td>
              <label>
                <input type="checkbox" name="checkbox">
                <i></i>
              </label>
            </td>
            <td>ERC725</td>
            <td>记录存证接口</td>
            <td>3070</td>
          </tr>
          <tr>
            <td>
              <label>
                <input type="checkbox" name="checkbox">
                <i></i>
              </label>
            </td>
            <td>ERC721</td>
            <td>资产创建接口</td>
            <td>3070</td>
          </tr>
          <tr>
            <td>
              <label>
                <input type="checkbox" name="checkbox">
                <i></i>
              </label>
            </td>
            <td>ERC721</td>
            <td>资产创建接口</td>
            <td>3070</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    components: {},
    data() {
      return {}
    },
    created() {
    },
    beforeMount(){
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .home {
    width:1200px
    margin: 0 auto
    .home-user{
      width: 1200px;
      height: 80px;
      line-height 80px
      background-color: #f6f8fd;
      border: solid 1px #bfbfbf;
      font-size: 18px;
      color: #707070;
      margin: 22px 0 20px 0
      p{
        float left
        span{
          font-size: 26px;
          color: #333333;
        }
      }
      p:nth-child(1){
        margin: 0 218px 0 60px
      }
    }
    .home-ability{
      width: 1200px;
      height: 100%;
      border: solid 1px #bfbfbf;
      table{
        width: 1200px;
        caption{
          height: 70px;
          background-color: #f6f8fd;
          .table-title{
            float left
            width: 300px
            height: 70px;
            line-height 70px
            i{
              width: 36px;
              height: 36px;
              display inline-block
              background url("../../common/images/icon_ability.png") no-repeat center
              background-size 100% 100%
              float left
              margin: 17px 12px
            }
            p{
              float left
              font-size: 20px;
              color: #333333;
            }
          }
          .table-handle{
            width:248px
            height: 70px
            float right
            div{
              width: 110px;
              height: 38px;
              line-height 38px
              border-radius: 10px;
              font-size: 16px;
              float left
              margin-top 16px
              i{
                width: 20px;
                height: 20px;
                display inline-block
                float left
                margin:9px
              }
              p{
                float left
              }
            }
            .add-ability{
              background-color: #1d79fe;
              i{
                background url("../../common/images/add_ability.png") no-repeat center
                background-size 100% 100%
              }
              a{
                color: #ffffff;
              }
            }
            .del-ability{
              background-color #ffffff
              border: solid 1px #1d79fe;
              margin-right 12px
              margin-left 12px
              i{
                background url("../../common/images/del_ability.png") no-repeat center
                background-size 100% 100%
              }
              a{
                color: #1d79fe;
              }
            }
          }
        }
        thead{
          font-size: 16px;
          color: #333333;
          tr{
            height:60px
            line-height 60px
            text-align left
            th:nth-child(1){
              width: 200px
            }
            th:nth-child(2){
              width: 320px
            }
          }
        }
        tbody{
          font-size: 18px;
          color: #666666;
          tr{
            height: 50px;
            line-height 50px
            i{
              width: 22px;
              height: 22px;
              display inline-block
              background url("../../common/images/unchecked.png") no-repeat center
              background-size 100% 100%
              position relative
              top: 5px;
              left: 89px
            }
            input{
              display none
            }
            input:checked + i{
              background url("../../common/images/checked.png") no-repeat center
              background-size 100% 100%
            }
          }
          tr:nth-child(odd){
            background-color: #f6f8fd;
          }
        }
      }
    }
  }
</style>
