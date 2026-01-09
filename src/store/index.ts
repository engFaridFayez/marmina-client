import { createStore } from 'vuex'
import state from './state'
import administrationManagement from './administrationManagement'
import { GlobalState } from './types'

const store = createStore<GlobalState>({
  state,
  modules:{
    administrationManagement
  }
})


export default store;