//引入Vuex -----相当于咱们最大的仓库
import Vuex from "vuex";
//引入Vue
import Vue from "vue";
//使用插件
Vue.use(Vuex);
//引入模块的仓库
import search from "@/store/search";
import login from "./login"
import register from "./register";
import add from '@/store/add'
import random1 from '@/store/random1'
import delete1 from '@/store/delete1'
import update from '@/store/update'

//需要暴露Vuex.Store类的实例(你需要暴露这个类的实例，如果你不对外暴露，外部是不能使用的)
export default new Vuex.Store({
  //模块：把小仓库进行合并变为大仓库
  modules: {
        search,
        login,
        register,
        add,
        random1,
       delete1,
       update
  },
});
