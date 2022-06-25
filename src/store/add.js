import {reqAddBook} from "@/api";
// search模块的小仓库
const state = {
    addbook:true
};
const mutations = {
    ADDBOOK(state, addbook) { 
        state.addbook=addbook
    }

};
const actions = {
    // 获取search模块数据
    async reqaddbooknList({ commit }, data) { 
        // 当前这个reqGetSearchInfo这个函数获取服务器数据的时候，至少传递一个数据(空对象)
        let result = await reqAddBook(data);
        console.log(result);
        if (result.code === 200) { 
            commit('ADDBOOK', result.success);
            
        }
        return result.success
    }
    
};
// 计算属性：在项目中，为了简化数据而生

const getters = {

};
export default {
    state,
    mutations,
    actions,
    getters
}
