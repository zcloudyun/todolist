<template>
<div>
  <fieldset class="add">
      <legend>修改图书信息</legend>
      <p id="test_id">id:{{idSelect.id}}</p>
      <p>书名：<input type="text" v-model="name" /></p>
      <p>作者：<input type="text" v-model="author" /></p>
      <p>价格：<input type="text" v-model="price" /></p>
      <p><button class="a" @click="add">提交</button></p>
 </fieldset>
</div>


</template>

<script>
import { mapState } from 'vuex'

export default {
  name:'Add',
  data(){
      return{    
        name:'',
        author:'',
        price:''        
      }
  },
  computed:{
     ...mapState({idSelect:(state)=>state.search.idSelect}),
     ...mapState({updatebook:(state)=>state.update.updatebook})
     
  },

  methods:{
    add(){
       const id=document.getElementById('test_id').innerText.split(':')[1]
       const {name,author,price}=this
       console.log(id);
       this.$store.dispatch('requpdatebookList',{id,name,author,price}).then((updatebook)=>{
         if(updatebook===true)
         {
           alert('修改成功')
         }
         this.$router.push('/book')
       })
      
    },
  },
}
</script>

<style scoped>
.add{
  width: 300px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, .5);
  font-size: 18px;
  margin: 20px auto;
  padding: 100px 150px 25px 140px;
  background: url(./images/1.jpg)no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
}
.add p {
  line-height: 30px;
  margin-top: 20px;
}
button {
  width: 60px;
  height: 25px;
  color: red;
  border: 1px solid orange;
  border-radius: 15px;
}
.a{
  margin: 5px 200px;
}
</style>