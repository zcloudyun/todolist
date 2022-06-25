<template>
  <div id="demo">
    <!-- 搜索区域-->
    <div class="bottom">
      <div class="searchArea">
        <div action="###" class="searchForm">
          <button @click="ret">回到书架</button>
          <input type="text" class="input-error input-xxlarge" v-model="sel"/>
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="idsel">ID查询</button>
        </div>
      </div>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>书名</th>
        <th>作者</th>
        <th>价格</th>
      </tr>
      <tr>
        <td>{{idSelect.id }}</td>
        <td>{{idSelect.name }}</td>
        <td>{{idSelect.author }}</td>
        <td>￥{{idSelect.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "IdSelect",
  data() {
    return {
       sel:''
      }
    },
  computed:{
     ...mapState({idSelect:(state)=>state.search.idSelect})
  },
  methods: {
    idsel(){
     const{sel}=this
     this.$store.dispatch('idselect',sel).then((idSelect)=>{
       console.log(idSelect.id);
       console.log(idSelect.name);
       console.log(idSelect.author);
       console.log(idSelect.price);
     })
    },
    ret(){
      this.$router.push('/book')
    }
  },
};
</script>

<style scoped lang="less">
table,
td {
  border: 1px solid #cccccc;
  border-collapse: collapse;
}
table {
  width: 1090px;
  margin: 20px auto;
}
tr {
  line-height: 30px;
}
td {
  text-align: center;
}
button {
  width: 60px;
  height: 25px;
  color: red;
  border: 1px solid orange;
  border-radius: 15px;
}

.searchArea {
  float: left;
  margin: 35px 20px 10px 215px;

  .searchForm {
    overflow: hidden;

    input {
      box-sizing: border-box;
      width: 500px;
      height: 32px;
      padding: 0px 4px;
      margin-left: 420px;
      margin-right: 20px;
      border: 2px solid #ded0ce;
      float: left;
      &:focus {
        outline: none;
      }
    }
    button {
      height: 32px;
      width: 70px;
      background-color: #3d3d88;
      border: none;
      color: #fff;
      float: left;
      margin-right: 10px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
}

</style>