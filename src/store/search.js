import {reqBook,reqBookName,reqBookId} from "@/api";
// search模块的小仓库
const state = {
    booklist: {},
    nameSelect: {},
    idSelect: {}
};
const mutations = {
    BOOK(state, booklist) { 
        state.booklist=booklist
    },
    NAMESELECT(state,nameSelect) { 
      state.nameSelect=nameSelect
    },
    IDSELECT(state,idSelect) { 
     state.idSelect=idSelect
    }
};
const actions = {
    // 获取search模块数据
    async reqbookList({ commit }) { 
        let result = await reqBook();
        console.log(result);
        if (result.code === 200) { 
            commit('BOOK', result.data);
        }
        return result.data
    },
    async nameselect({ commit },data) { 
        let result = await reqBookName(data);
        console.log(result);
        if (result.code === 200) { 
            commit('NAMESELECT', result.data);
        }
        return result.data
    },
    async idselect({ commit },data) { 
        let result = await reqBookId(data);
        console.log(result);
        if (result.code === 200) { 
            commit('IDSELECT', result.data);
            console.log(result.data);
        }
        return result.data
    },
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
