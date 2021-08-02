import { debounce } from './utils'

import {POP, NEW, SELL} from "./const";

import BackTop from '@/components/content/backTop/BackTop'
export const itemListenerMixin = {
    data () {
        return {
            itemImgListener:null,
            refresh:null     
        }
    },
    mounted () {
      this.refresh = debounce(this.$refs.scroll.refresh,100)
      this.itemImgListener = ()=>{
          this.refresh()
        }
      this.$bus.$on('itemImagLoad',this.itemImgListener)

    }
}

export const backtopMixin = {
  data () {
    return {
      isShowBackTop:false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    }
  }
}
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}