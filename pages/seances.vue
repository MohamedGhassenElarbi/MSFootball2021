<template>
    <div class="bg-gray-200 h-screen">
        <headerMenu></headerMenu>
        <addSeance></addSeance>
        <seancesList></seancesList>
        
    </div>
</template>
<script>
import headerMenu from '@/components/affichage/headerAff'
import addSeance from '@/components/affichage/addSeance'
import seancesList from '@/components/affichage/seancesList'

export default {
   components:{
      headerMenu, 
      addSeance,
      seancesList,
      
   } 
}
</script>