import {reqUpdateBook} from "@/api";
// search模块的小仓库
const state = {
    updatebook:true
};
const mutations = {
    UPDATDEBOOK(state, updatebook) { 
        state.updatebook=updatebook
    }

};
const actions = {
    // 获取search模块数据
    async requpdatebookList({ commit }, data) { 
        let result = await reqUpdateBook(data);
        console.log(result);
        if (result.code === 200) { 
            commit('UPDATDEBOOK', result.success);
            
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
