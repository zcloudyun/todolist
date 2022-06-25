<template>
<fieldset class="add">
      <legend>添加新书</legend>
      <p>书名：<input type="text" v-model="name" /></p>
      <p>作者：<input type="text" v-model="author" /></p>
      <p>价格：<input type="text" v-model="price" /></p>
      <p>路径：<input type="text" v-model="photo" /></p>
      <p>介绍：<textarea name="" id="" cols="26" rows="3" v-model="text" ></textarea></p>
      
      <p><button class="a" @click="add">提交</button></p>
</fieldset>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'Add',
  data(){
      return{
              id:0,
              name:'',
              author:'',
              price:'',
              text:'',
              photo:''    
      }
  },
   computed:{
     ...mapState ({addbook:(state)=>state.add.addbook}),
  },
  methods:{
    add(){
      const {name,author,price,text,photo}=this
       this.$store.dispatch('reqaddbooknList',{name,author,price,text,photo}).then((addbook)=>{
         if(addbook===true)
         {
           alert('插入成功')
         }
         this.$router.push('/book')
       })
    }
  }
}
</script>

<style scoped>
.add{
  width: 500px;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, .5);
  font-size: 18px;
  margin: 20px auto;
  padding: 120px 50px 25px 230px;
  background: url(./images/1.png)no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
}
.add p {
  line-height: 30px;
  margin-top: 10px;
}
input{
  width: 250px;
}
button {
  width: 60px;
  height: 25px;
  color: red;
  border: 1px solid orange;
  border-radius: 15px;
}
.a{
  margin: 0 200px;
}

 
</style>