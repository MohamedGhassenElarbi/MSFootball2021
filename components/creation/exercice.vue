<template>
<div class=" rounded-lg  w-64  h-64 bg-white font-sans mb-3 ">
  <div class="color text-white text-sm flex justify-between rounded-t-lg h-8 overflow-hidden">
    <div class="ml-4 font-semibold py-1"><div >Désequilibrer/finir</div></div>
    <div class="colorSituation inline pl-4 py-1 w-24">situation</div>
  </div>
  
    <img class="imageHeight w-64" src="https://www.nextgenbase.com/files/2010/11/FM11-tactics-320x200.jpg" alt="">
  
  <div class="flex justify-between mt-3 ml-2 mr-2">
    <div class="font-bold leading-4 text-lg ">{{exercice.partie}}</div>
    <div class="border-solid border border-black rounded-lg h-6 text-sm -mt-1 mr-2" >{{exercice.theme}}</div>
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
.imageHeight{
  height:133px ;
}
.color{
  background-color: rgb(131, 186, 225)
}
.colorSituation{
  background-color: rgb(100, 169, 225)
}
</style>