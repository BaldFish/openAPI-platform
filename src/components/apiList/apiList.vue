<template>
  <div class="apiList">
    <div class="apiList-search">

    </div>
    <div class="apiList-ability">
      <table>
        <caption>
          <div class="table-title">
            <i></i>
            <p>能力运行概况</p>
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
        </tbody>
      </table>
    </div>
    <div class="apiList-flow">
      <table>
        <caption>
          <div class="table-title">
            <i></i>
            <p>交易流水</p>
          </div>
        </caption>
        <thead>
        <tr>
          <th>能力</th>
          <th>购买时间</th>
          <th>支付金额</th>
          <th>剩余金额</th>
          <th>备注</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>资产创建接口</td>
          <td>2018-11-04 17:45:00</td>
          <td>-0.5</td>
          <td>30720.00</td>
          <td>-</td>
        </tr>
        <tr>
          <td>资产创建接口</td>
          <td>2018-11-04 17:45:00</td>
          <td class="red">+29999</td>
          <td>30720.00</td>
          <td>-</td>
        </tr>
        <tr>
          <td>资产创建接口</td>
          <td>2018-11-04 17:45:00</td>
          <td>-0.5</td>
          <td>30720.00</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "apiList",
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
  .apiList {
    width:1200px
    margin: 0 auto
    .apiList-search{
      width: 1200px;
      height: 70px;
      background-color: #f6f8fd;
      border: solid 1px #bfbfbf;
      margin: 22px 0 27px 0
    }
    .apiList-ability{
      width: 1200px;
      height: 100%;
      border: solid 1px #bfbfbf;
      margin-bottom 20px
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
    .apiList-flow{
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
              padding-left 50px
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
            td:nth-child(1){
              padding-left 50px
            }
            .red{
              color: #e60000;
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
