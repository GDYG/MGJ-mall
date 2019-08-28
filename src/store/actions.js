import {
  ADD_COUNT,
  ADD_PUSH
} from './mutation-types'

export default {
  cartAdd(context, payLoad) {
    let countCart = null
    for (let item of context.state.cartList) {
      if(item.iid === payLoad.iid) {
        countCart = item
      }
    }
    if(countCart) {
      // countCart.count += 1
      context.commit(ADD_COUNT, countCart)
    }else {
      payLoad.count = 1
      // state.cartList.push(payLoad)
      context.commit(ADD_PUSH, payLoad)
    }
  }
}