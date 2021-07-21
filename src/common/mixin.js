import {debounce} from './utils'
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
      this.$refs.scroll.scrollTo(0,0)
    }
  }
}