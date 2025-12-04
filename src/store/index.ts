import { createStore } from 'vuex'
import state from './state'
import { GlobalState } from './types'
import administrationManagement from './administrationManagement';

const store = createStore<GlobalState>({
  state,
  modules: {
    administrationManagement
  }
})

export default store;
