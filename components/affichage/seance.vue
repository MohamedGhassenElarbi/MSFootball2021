<template>
    <div class="rounded-lg bg-white font-sans mb-8 shadowStyle  cursor-pointer cssOfCard " v-on:click="$router.push('/seances/'+seance.id)">
        <div class="color text-white text-sm flex justify-between rounded-t-lg h-8 overflow-hidden pr-2">
            <div class="ml-2 font-semibold py-1 text-sm" >Désequilibrer/ finir</div>
            <div class="colorSituation inline px-1 w-20 text-center py-1 "><b-icon icon="circle-square" font-scale="1.2"></b-icon><span class="ml-2">4</span></div>
             <div class="text-white py-1 pl-1" v-on:click.stop="removeSeance"><b-icon icon="trash" font-scale="1.2"></b-icon></div>
        </div>

        <img  class="cssImage w-64 " src="https://www.nextgenbase.com/files/2010/11/FM11-tactics-320x200.jpg" alt="">

            <div class="font-bold text-lg mr-8 pl-2 pt-3 pb-2 leading-5">{{seance.nom}}</div>
        
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
    seance:{
      type:Object,
      required:true
    }
  },
  methods:{
    removeSeance(){
      this.$store.dispatch('removeSeance',this.seance.id)
      
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