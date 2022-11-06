import { createStore } from 'vuex'

export default createStore({
  state: {
    fName: 10,
    lName: true,
    pass: true,
    email: true
  },
  getters: {
  },
  mutations: {
    add(state){
      state.fName ++
    }
  },
  actions: {
  },
  modules: {
  }
})
