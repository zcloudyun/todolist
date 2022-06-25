import {reqRandomBook} from "@/api";
// search模块的小仓库
const state = {
    randomlist: {}
};
const mutations = {
    RANDOMBOOK(state, randomlist) { 
        state.randomlist=randomlist
    }

};
const actions = {
    async reqrandomList({ commit }) { 
        let result = await reqRandomBook();
        console.log(result);
        if (result.code === 200) { 
            commit('RANDOMBOOK', result.data);
        }
        return result.data
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
