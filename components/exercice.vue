<template>
<div class="border border-4 border-gray-400 w-64 rounded-lg h-68 bg-white font-mono shadow-lg">
  <div class="bg-blue-300 text-white text-sm flex justify-between">
    <div class="ml-4 font-bold"><div >désequilibrer/finir</div></div>
    <div class="bg-blue-400 inline px-1 ">situation</div>
  </div>
  <div>
    <img src="https://www.nextgenbase.com/files/2010/11/FM11-tactics-320x200.jpg" alt="">
  </div>
  <div class="flex justify-between mt-3 ml-2 mr-2">
    <div class="font-bold">{{exercice.partie}}</div>
    <div class="border-solid border-2 border-black rounded-lg h-8" >{{exercice.theme}}</div>
  </div>
  <div class="flex justify-around mt-3 ml-2 mr-2 mb-2">
    
    <div>12</div>
    <div>5</div>
    <div>3</div>
    <div class="rounded-lg bg-blue-400 text-white ">senior</div>
  </div>

</div>
</template>
<script>
export default {
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