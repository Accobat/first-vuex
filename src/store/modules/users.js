const usersStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        name: "Alex",
        age: 21,
      },
    },
  },
  getters: {
    usersList: ({ list }) => Object.values(list),
  },
  mutations: {},
  actions: {},
};

export default usersStore;
