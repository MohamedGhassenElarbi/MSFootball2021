<template>
<div class="flex">
<div class=" rounded-lg  cssCard bg-white font-sans shadowStyle">
  <div class="color text-white text-sm flex justify-between rounded-t-lg h-8 overflow-hidden">
    <div class="ml-4 font-semibold py-1">Désequilibrer/finir</div>
    <div class="colorSituation inline pl-3 py-1 w-20">situation</div>
  </div>
  <div>
    <img class="imageHeight w-64" src="https://www.nextgenbase.com/files/2010/11/FM11-tactics-320x200.jpg" alt="">
  </div>
  <div class="flex justify-between  ml-2 mr-2 mt-3">
    <div class="font-bold leading-4 text-lg ">{{exercice.partie}}</div>
    <div class="border-solid border border-black rounded-lg h-6 text-sm -mt-2 mr-1" >{{exercice.theme}}</div>
  </div>
  <uiComponent></uiComponent>
  
    
</div>
<div class="text-red-500 -mt-4 cursor-pointer" v-on:click="remove"><b-icon icon="x-circle" font-scale="2"></b-icon></div>
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
  },
  methods:{
      remove(){
        this.$store.dispatch('removeExerciceFromSeance',this.exercice.id);
      }
  }
}
</script>
<style scoped>
.shadowStyle{
-webkit-box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);
-moz-box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);
box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);
}
.cssCard{
  width: 244px;
  height: 255px;
}
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