<template>
<div class=" rounded-lg cssOfCard bg-white font-sans mb-3 cursor-pointer shadowStyle" v-on:click="$router.push('/exercices/'+exercice.id)">
  <div class="color text-white text-sm flex justify-between rounded-t-lg h-8 overflow-hidden pr-2">
    <div class="ml-2 font-semibold py-1">Désequilibrer/finir</div>
    <div class="colorSituation inline pl-4 py-1 w-24">situation</div>
    <div class="text-white py-1 pl-1" v-on:click.stop="removeExercice"><b-icon icon="trash" font-scale="1.2"></b-icon></div>
  </div>
  
    <img class="cssImage w-64" src="https://www.nextgenbase.com/files/2010/11/FM11-tactics-320x200.jpg" alt="">
  
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
  },
  methods:{
    removeExercice(){
      
      this.$store.dispatch('removeExercice',this.exercice.id)
      
    }
  },   
}
</script>
<style scoped>
.shadowStyle{
-webkit-box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);
-moz-box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);
box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);

}
.cssOfCard{
width:240px;
height: 258px;
}
.cssImage{
height:130px ;

}
.color{
  background-color: rgb(131, 186, 225)
}
.colorSituation{
  background-color: rgb(100, 169, 225)
}
</style>
