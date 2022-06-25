<template>
<div>
   <Header v-show="$route.meta.show"/>
  <!-- 路由组件出口的地方 -->
  <router-view></router-view>
</div>
</template>
<script>
import Header from './components/Header'
import Home from './components/Home'
import Book from './components/Book'
import Add from './components/Add'
import Update from './components/Update'
import NameSelect from './components/NameSelect'
import IdSelect from './components/IdSelect'
export default {
   name:'App',
   components:{
      Header,
      Home,
      Book,
      Update,
      Add,
      NameSelect,
      IdSelect

   },  
}
</script>

