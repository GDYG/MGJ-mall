import {debounce} from './debounce'
export const itemMixin = {
  data() {
    return {
      homeImageLoad: null
    }
  },
  mounted() {
    //防抖动函数debounce
    let refresh = debounce(this.$refs.scroll.refresh, 100)
    //监听图片加载完成
    this.homeImageLoad = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.homeImageLoad)
  },
}