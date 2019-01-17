<template>
  <div class="apiList">
    <div class="apiList-search">
      <div class="search-select">
        <label>名称：</label>
        <div class="select" @click="showSelect" @mouseleave.stop="leaveUl">
          <span>{{selectName}}</span>
          <i></i>
          <ul v-if="isSelectShow">
            <li v-for="item of selectList" @click="choice(item)" :key="item.api_id">{{item.api_name}}</li>
          </ul>
        </div>
      </div>
      <div class="search-time">
        <label>查询时间：</label>
        <template>
          <el-date-picker
            v-model="time"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
        </template>
      </div>
      <input type="button" value="查询" @click="search">
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
        <tr v-for="item of abilityList" :key="item.api_id">
          <td>
            <!--<label>
              <input type="checkbox" name="checkbox">
              <i></i>
            </label>-->
          </td>
          <td>{{item.api_type_name}}</td>
          <td>{{item.api_name}}</td>
          <td>{{item.api_count}}</td>
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
            <p>支出总额：<span>18008.00</span></p>
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
        <tr v-for="item of tradingList">
          <td>{{item.api_name}}</td>
          <td>{{item.purchased_time}}</td>
          <td>{{item.price}}</td>
          <td>{{item.balance}}</td>
          <td>{{item.remark}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="block" style="text-align:center;margin: 30px auto">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size=limit
        :page-sizes="[5, 10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total=total>
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "apiList",
    components: {},
    data() {
      return {
        userId: "",
        token: "",
        isSelectShow: false,
        selectList: [],
        selectName: "全部",
        selectId: "all",
        time: ["", ""],
        page: 1,
        limit: 10,
        total: 10,
        abilityList: [],
        tradingList: [],
      }
    },
    created() {
    },
    beforeMount() {
      this.userId = "5a6eb317e2794d3441d45181";
      this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjMyNDMzMzUsInVzZXJfaWQiOiI1YTZlYjMxN2UyNzk0ZDM0NDFkNDUxODEiLCJkZXZpY2VfaWQiOiIxIn0.DrBCErsD9rw5ac0JrLdYgH_gO9hUk-kjQJ_cu2wdwiE";
      this.getSelectList();
      this.search();
    },
    mounted() {
    },
    watch: {
      time: function () {
        if (this.time === null) {
          this.time = ["", ""]
        } else {
          this.time[0] = new Date(this.time[0]).toUTCString() === "Invalid Date" ? "" : new Date(this.time[0]).toUTCString();
          this.time[1] = new Date(this.time[1]).toUTCString() === "Invalid Date" ? "" : new Date(this.time[1]).toUTCString();
        }
      }
    },
    computed: {},
    methods: {
      //获取下拉框列表
      getSelectList() {
        this.$axios({
          method: 'GET',
          url: `${this.$baseURL}/v1/platform/api-name/${this.userId}`,
          headers: {
            'X-Access-Token': this.token,
          }
        }).then(res => {
          this.selectList = res.data.data;
        }).catch(error => {
          console.log(error)
        })
      },
      //搜索查询
      search() {
        this.getAbilityList();
        this.getTradingFlow();
      },
      //获取已接入能力列表
      getAbilityList() {
        this.$axios({
          method: 'GET',
          url:
            `${this.$baseURL}/v1/platform/user-apis/${this.userId}?api_id=${this.selectId}&page=${this.page}&limit=${this.limit}&start_date=${this.time[0]}&end_date=${this.time[1]}`,
          headers: {
            'X-Access-Token': this.token,
          }
        }).then(res => {
          this.abilityList = res.data.data.res_list;
        }).catch(error => {
          console.log(error)
        })
      },
      //获取交易流水
      getTradingFlow() {
        this.$axios({
          method: 'GET',
          url:
            `${this.$baseURL}/v1/platform/api-details/${this.userId}?api_id=${this.selectId}&page=${this.page}&limit=${this.limit}&start_date=${this.time[0]}&end_date=${this.time[1]}`,
          headers: {
            'X-Access-Token': this.token,
          }
        }).then(res => {
          this.total = res.data.data.total_count;
          
          this.tradingList = res.data.data.res_list
        }).catch(error => {
          console.log(error)
        })
      },
      //select显示
      showSelect() {
        this.isSelectShow = !this.isSelectShow
      },
      //select选择
      choice(option) {
        this.selectName = option.api_name;
        this.selectId = option.api_id;
      },
      //鼠标移出
      leaveUl() {
        this.isSelectShow = false
      },
      //更改每页显示条数
      handleSizeChange(val) {
        this.limit = val;
        this.search();
      },
      //切换分页
      handleCurrentChange(val) {
        this.page = val;
        this.getTradingFlow();
      },
    },
  }
</script>

<style scoped lang="stylus">
  .apiList {
    width: 1200px
    margin: 0 auto
    
    .apiList-search {
      width: 1200px;
      height: 70px;
      background-color: #f6f8fd;
      border: solid 1px #bfbfbf;
      margin: 22px 0 27px 0
      
      label {
        font-size: 20px;
        color: #333333;
        float left
      }
      
      input {
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
      
      .search-select {
        float left
        margin-left 30px
        line-height 70px
        
        .select {
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
          
          i {
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
            
            li {
              font-size: 14px
              color: #333333
              cursor pointer
            }
            
            li:hover {
              color: #1d79fe;
            }
          }
        }
      }
      
      .search-time {
        line-height 70px
        margin-left 60px
        float: left;
      }
      
    }
    
    .apiList-ability {
      width: 1200px;
      height: 100%;
      border: solid 1px #bfbfbf;
      margin-bottom 20px
      
      table {
        width: 1200px;
        
        caption {
          height: 70px;
          background-color: #f6f8fd;
          
          .table-title {
            //float left
            //width: 300px
            height: 70px;
            line-height 70px
            
            i {
              width: 36px;
              height: 36px;
              display inline-block
              background url("../../common/images/icon_ability.png") no-repeat center
              background-size 100% 100%
              float left
              margin: 17px 12px
            }
            
            p {
              float left
              font-size: 20px;
              color: #333333;
            }
          }
        }
        
        thead {
          font-size: 16px;
          color: #333333;
          
          tr {
            height: 60px
            line-height 60px
            text-align left
            
            th:nth-child(1) {
              width: 200px
            }
            
            th:nth-child(2) {
              width: 320px
            }
          }
        }
        
        tbody {
          font-size: 18px;
          color: #666666;
          
          tr {
            height: 50px;
            line-height 50px
            
            i {
              width: 22px;
              height: 22px;
              display inline-block
              background url("../../common/images/unchecked.png") no-repeat center
              background-size 100% 100%
              position relative
              top: 5px;
              left: 89px
            }
            
            input {
              display none
            }
            
            input:checked + i {
              background url("../../common/images/checked.png") no-repeat center
              background-size 100% 100%
            }
          }
          
          tr:nth-child(odd) {
            background-color: #f6f8fd;
          }
        }
      }
    }
    
    .apiList-flow {
      width: 1200px;
      height: 100%;
      border: solid 1px #bfbfbf;
      
      table {
        width: 1200px;
        
        caption {
          height: 70px;
          background-color: #f6f8fd;
          
          .table-title {
            //float left
            //width: 300px
            height: 70px;
            line-height 70px
            
            i {
              width: 36px;
              height: 36px;
              display inline-block
              background url("../../common/images/icon_flow.png") no-repeat center
              background-size 100% 100%
              float left
              margin: 17px 12px
            }
            
            p {
              float left
              font-size: 20px;
              color: #333333;
            }
            
            p:nth-child(3) {
              float right
              margin-right 80px
              font-size: 18px;
              color: #666666;
              
              span {
                font-size: 18px;
                color: #03a529;
              }
            }
          }
        }
        
        thead {
          font-size: 16px;
          color: #333333;
          
          tr {
            height: 60px
            line-height 60px
            text-align left
            
            th:nth-child(1) {
              width: 240px;
              padding-left 50px
            }
            
            th:nth-child(2) {
              width: 320px
            }
          }
        }
        
        tbody {
          font-size: 18px;
          color: #666666;
          
          tr {
            height: 50px;
            line-height 50px
            
            td:nth-child(1) {
              padding-left 50px
            }
            
            .red {
              color: #e60000;
            }
          }
          
          tr:nth-child(odd) {
            background-color: #f6f8fd;
          }
        }
      }
    }
  }
</style>
