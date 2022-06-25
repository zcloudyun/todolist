import {reqDeleteBook} from "@/api";
// search模块的小仓库
const state = {
    deletelist:true
};
const mutations = {
    DELETEBOOK(state, deletelist) { 
        state.deletelist=deletelist
    }

};
const actions = {
    async reqdeleteList({ commit }, data) { 
        let result = await reqDeleteBook(data);
        console.log(result);
        if (result.code === 200) { 
            commit('DELETEBOOK', result.success);
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
