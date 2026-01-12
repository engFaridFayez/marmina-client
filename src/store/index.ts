import { createStore } from 'vuex'
import state from './state'
<<<<<<< HEAD
import administrationManagement from './administrationManagement'
import { GlobalState } from './types'

const store = createStore<GlobalState>({
  state,
  modules:{
=======
import { GlobalState } from './types'
import administrationManagement from './administrationManagement';

const store = createStore<GlobalState>({
  state,
  modules: {
>>>>>>> 5bc6de5ebb4d710a44819918a06d7473ec2e529a
    administrationManagement
  }
})

<<<<<<< HEAD

export default store;
=======
export default store;
>>>>>>> 5bc6de5ebb4d710a44819918a06d7473ec2e529a
