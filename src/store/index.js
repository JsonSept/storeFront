import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'http://localhost:8070'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async login({commit},loginDetails){
      let req = await axios.post(baseUrl+'/login',loginDetails)
      console.log(req.data);
    }
  },
  modules: {
  }
})
