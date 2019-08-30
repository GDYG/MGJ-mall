import {
  ADD_COUNT,
  ADD_PUSH
} from './mutation-types'

export default {
  cartAdd(context, payLoad) {
    return new Promise((resolve, reject) => { //添加购物车成功提示信息，用promise，里面将添加成功信息告诉外面
      let countCart = null
      for (let item of context.state.cartList) {
        if(item.iid === payLoad.iid) {
          countCart = item
        }
      }
      if(countCart) {
        // countCart.count += 1
        context.commit(ADD_COUNT, countCart)
        resolve('当前添加商品+1')
      }else {
        payLoad.count = 1
        // state.cartList.push(payLoad)
        context.commit(ADD_PUSH, payLoad)
        resolve('添加了新商品')
      }
    })
  }
}