<template>
    <div class="rounded-lg  w-64 h-64 bg-white font-mono shadow-lg mb-8 bg-white">
        <div class="bg-blue-300 text-white text-sm flex justify-between rounded-t-lg h-6">
            <div class="ml-4 font-bold"><div >Désequilibrer/finir</div></div>
            <div class="bg-blue-400 inline px-1 rounded-t-lg w-16 text-center"><b-icon icon="circle-square" font-scale="1.2"></b-icon><span class="ml-2">4</span></div>
        </div>
        <div>
            <img src="https://www.nextgenbase.com/files/2010/11/FM11-tactics-320x200.jpg" alt="">
        </div>
            <div class="flex justify-between mt-3 ml-2 mr-2">
            <div class="font-bold">{{seance.nom}}</div>
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
    seance:{
      type:Object,
      required:true
    }
  }   
}
</script>