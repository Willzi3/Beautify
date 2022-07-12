import { createStore } from 'vuex'
export default createStore({
  state: {
    Users: null
  },
  getters: {
  },
  mutations: {
    setusers: (state, Users) => {
      state.Users = Users
    }
  },
  actions: {
    login: async (context, data) => {
     const{email, password} = data
     const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
     const usersData = await response.json();
     console.log(usersData)
     context.commit("setusers", usersData[0])
    },
    register: async (context, data) => {
      const{FullName, email, password} = data
      fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify({
            FullName: FullName,
            email: email,
            password: password,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
    }
  },
  modules: {
  }
})