<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
    name:'Toast',
    data () {
        return {
            message:'',
            isShow:false
        }
    },
    methods: {
        show(message,time=1200){

            this.isShow =true
            this.message = message
            setTimeout(()=>{
                this.isShow =false
                this.message = ''
            },time)
        }
    }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        padding: 10px 8px;
        background-color: rgba(0, 0, 0, 0.6);
        transform: translate(-50%,-50%);
        color: white;
        z-index: 999;
        border-radius: 6px;
    }
</style>