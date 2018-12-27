<template>
  <div class="apiList">
    <div class="apiList-search">
      <div class="search-select">
        <label>名称：</label>
        <div class="select" @click="showSelect">
          <span>{{defaultOption}}</span>
          <i></i>
          <ul v-if="isSelectShow" @mouseleave.stop="leaveUl">
            <li @click="choice('资产创建接口')">资产创建接口</li>
            <li @click="choice('记录存证接口')">记录存证接口</li>
            <li @click="choice('资产创建接口1')">资产创建接口1</li>
            <li @click="choice('记录存证接口2')">记录存证接口2</li>
          </ul>
        </div>
      </div>
      <div class="search-time">
        <label>查询时间：</label>
        <template>
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </template>
      </div>
      <input type="button" value="查询">
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
      return {
        isSelectShow: false,
        defaultOption: "资产创建接口",
        value6: '',
      }
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {
      //select显示
      showSelect(){
        this.isSelectShow = !this.isSelectShow
      },
      //select选择
      choice(option){
        this.defaultOption = option
      },
      //鼠标移出
      leaveUl() {
        this.isSelectShow = false
      },
    },
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
      label{
        font-size: 20px;
        color: #333333;
        float left
      }
      input{
        width: 110px;
        height: 38px;
        line-height 38px
        background-color: #1d79fe;
        border-radius: 10px;
        cursor: pointer;
        outline none
        font-size: 16px;
        color: #ffffff;
        float right
        margin: 16px 20px 16px 0
      }
      .search-select{
        float left
        margin-left 30px
        line-height 70px
        .select{
          width: 180px;
          height: 34px;
          line-height 34px
          background-color: #ffffff;
          border: solid 1px #bfbfbf;
          float left
          margin-top 18px
          box-sizing border-box
          padding-left 15px
          cursor pointer
          i{
            width: 24px;
            height: 15px;
            display inline-block
            background url("../../common/images/icon_select.png") no-repeat center
            background-size 100% 100%
            margin: 10px;
            float: right;
            cursor pointer
          }
          ul {
            width: 180px
            box-sizing border-box
            height: auto
            background-color: #ffffff;
            box-shadow: 0 5px 15px 0 rgba(175, 192, 209, 0.55);
            position relative
            right: 16px
            padding-left 15px
            li{
              font-size: 14px
              color: #333333
              cursor pointer
            }
            li:hover{
              color: #1d79fe;
            }
          }
        }
      }

      .search-time{
        line-height 70px
        margin-left 60px
        float: left;
      }

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
              background url("../../common/images/icon_flow.png") no-repeat center
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
              width: 240px;
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
