import { createStore } from 'vuex'

export default createStore({
  state: {
    fName: '',
    lName: '',
    pass: '',
    email: ''
  },
  getters: {
  },
  mutations: {
    checkfName(state){
      if(state.fName.trim() === '') return false
      else return true 
    },
    checklName(state){
      if(state.lName.trim() === '') return false
      else return true 
    },
    checkPass(state){
      if(state.pass.trim() === '') return false
      else return true 
    },
    checkEmail(state){
      if(
          state.email.length == 0 ||
          state.email.trim().includes(' ') ||
          state.email.indexOf('@') == -1 || 
          state.email.match(/@/g).length != 1 || 
          state.email.indexOf('.') == -1 || 
          state.email.match(/\./g).length != 1 ||
          state.email.indexOf('.') < state.email.indexOf('@') ||
          state.email.search(/\.([a-z]|[0-9])/) == -1 || 
          state.email.search(/@([a-z]|[0-9])/) == -1 
      
        ) return false
      else return true
    }
  },
  actions: {
  },
  modules: {
  }
})
