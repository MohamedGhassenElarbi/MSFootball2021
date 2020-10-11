<template>
<div class="w-64 rounded-lg h-68 bg-white font-mono shadow-lg">
  <div class="bg-blue-300 text-white text-sm flex justify-between rounded-t-lg">
    <div class="ml-4 font-bold"><div >désequilibrer/finir</div></div>
    <div class="bg-blue-400 inline px-1 rounded-t-lg">situation</div>
  </div>
  <div>
    <img src="https://www.nextgenbase.com/files/2010/11/FM11-tactics-320x200.jpg" alt="">
  </div>
  <div class="flex justify-between mt-3 ml-2 mr-2">
    <div class="font-bold">{{item.partie}}</div>
    <div class="border-solid border-2 border-black rounded-lg h-8" >{{item.theme}}</div>
  </div>
  <div class="flex justify-around mt-3 ml-2 mr-2 mb-2">
    
    <div class="flex">
      <div class="text-blue-400 mt-0 mr-2"><b-icon icon="clock" font-scale="0.7"></b-icon></div>
      12'
    </div>
    <div class="flex">
      <div class="text-indigo-100 mt-0"><b-icon icon="circle-fill" font-scale="1.5"></b-icon></div>
      <div class="absolute pl-2">5</div>
    </div>
    <div class="flex">
      <div class="text-yellow-500 mt-0"><b-icon icon="star-fill" font-scale="0.7"></b-icon></div>
      <div class="text-yellow-500 mt-0"><b-icon icon="star-fill" font-scale="0.7"></b-icon></div>
      <div class="text-yellow-500 mt-0"><b-icon icon="star-fill" font-scale="0.7"></b-icon></div>
      
    </div>
    <div class="rounded-lg bg-blue-400 text-white ">seniors</div>
  </div>
  <button class="bg-green-400 rounded-b-lg text-center w-full" v-on:click="ajouterExercice">Ajouter a la séance</button>

</div>
</template>
<script>
export default {
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  methods:{
    ajouterExercice(){
      this.$store.dispatch('addExerciceSeance',this.item)
    }
  }
}
</script>