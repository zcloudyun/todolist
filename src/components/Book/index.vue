<template>
  <div id="demo">
    <!-- 搜索区域-->
    <div class="bottom">
      <div class="searchArea">
        <div action="###" class="searchForm">
          <button @click="add" style="background-color: #6B238E;">添加</button>
          <button @click="findall">全部查询</button>
          <button @click="names">书名查询</button>
          <button @click="ids">ID查询</button>
        </div>
      </div>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>书名</th>
        <th>作者</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      <tr  v-for="(book, index) in showPage" :key="index">
        <td>{{ book.id }}</td>
        <td>{{book.name }}</td>
        <td>{{ book.author }}</td>
        <td>￥{{ book.price }}</td>
        <td>
          <button @click="del(book)">删除</button>
          <button @click="update(book)">修改</button>
        </td>
      </tr> 
    </table>
    <Pagination :pageNo="pageNo" :pageSize="pageSize" :total="total" :continues="5" @getpageNo="getpageNo"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Book",
  data() {
    return {
        id: 0,
        name: "java",
        author: "张三",
        price: 100,
        // 当前页
        pageNo:1,
        // 每页的大小
        pageSize:5,
        // 总页数
        total:'',
        // 每页展示的数据
        showPage:[],
        // 后台接收到的数据
        tableDate:[]
      }
    },
  mounted(){
    this.findall()
  },
  computed:{
     ...mapState({booklist:(state)=>state.search.booklist}),
     ...mapState({deletelist:(state)=>state.delete1.deletelist}),
  },
  methods: {
    names(){
      this.$router.push("/nameselect");
    },
    ids(){
     this.$router.push("/idselect");
    },
    add() {
      this.$router.push("/add");
    },
    update(book) {
      this.$router.push( '/update');
      this.$store.dispatch('idselect',book.id)
    },
    // 自定义事件的回调函数---获取当前第几页
    getpageNo(pageNo){
        this.pageNo=pageNo;
        // 获取一组数组的第一个索引
       var list=(this.pageNo-1)*this.pageSize;
       // 取出每一页的数据
       this.showPage=this.tableDate.slice(list,list+this.pageSize)
        this.findall()
    },
    async findall(){
      await this.$store.dispatch("reqbookList").then((booklist)=>{
        this.tableDate=booklist
        if(!this.tableDate)
        {
          this.showPage=[]
        }
        else
        {
          this.total=booklist.length
          console.log(this.total);
        }
      })
    },
   
    del(book)
    {
      console.log(book.id);
      this.$store.dispatch("reqdeleteList",book.id).then((deletelist)=>{
       if(deletelist===true)
       {
         alert('删除成功')
       }
       this.findall()
     })
     
    },
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
    button {
      height: 32px;
      width: 80px;
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