import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    breadListMutations(getters, list) {
      getters.breadListState = list
      sessionStorage.setItem('breadListStorage', list)
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  },
  getters: {
    breadListState() {
      return JSON.parse(sessionStorage.getItem('breadListStorage')) || []
    }
  }
}

export default app
