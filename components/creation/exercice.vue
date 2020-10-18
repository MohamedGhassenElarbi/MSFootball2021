<template>
<div class=" rounded-lg  w-64  h-64 bg-white font-mono shadow-lg mb-3">
  <div class="bg-blue-300 text-white text-sm flex justify-between rounded-t-lg">
    <div class="ml-4 font-bold"><div >désequilibrer/finir</div></div>
    <div class="bg-blue-400 inline px-1 rounded-t-lg">situation</div>
  </div>
  <div>
    <img src="https://www.nextgenbase.com/files/2010/11/FM11-tactics-320x200.jpg" alt="">
  </div>
  <div class="flex justify-between mt-3 ml-2 mr-2">
    <div class="font-bold">{{exercice.partie}}</div>
    <div class="border-solid border-2 border-black rounded-lg h-8" >{{exercice.theme}}</div>
  </div>
  <uiComponent></uiComponent>

</div>
</template>
<script>
import uiComponent from '@/components/uiComponent'
export default {
  components:{
        uiComponent,
    },
  props:{
    exercice:{
      type:Object,
      required:true
    }
  }
}
</script>
<style scoped>

</style>