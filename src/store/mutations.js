import {
  ADD_COUNT,
  ADD_PUSH
} from './mutation-types'

export default {
  [ADD_COUNT](state, payLoad) {
    payLoad.count++
  },
  [ADD_PUSH](state, payLoad) {
    payLoad.checked = true
    state.cartList.push(payLoad)
  }
}