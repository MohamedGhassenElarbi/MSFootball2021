<template>
<div > 
  <!--<formseance></formseance>-->
  <liste></liste>
  <add></add>
<listeAjouter ></listeAjouter>
<div class="flex justify-center ml-0">
<button class="bg-blue-400 text-white rounded-md w-64 h-20 mt-16 text-3xl font-bold text-center"> Valider</button>
</div>
</div>
</template>

<script>
import formseance from '@/components/formseance'
import listeAjouter from '@/components/listeAjouter'
import liste from '@/components/liste'
import add from '@/components/add'


export default {
  
  components:{
    formseance,
    listeAjouter,
    liste,
    add,
    formseance
  },
}
</script>

<style>

</style>
