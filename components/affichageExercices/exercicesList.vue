<template>
    <div class="bg-white mx-4 mt-3 rounded-md bg-gray-800 ">
        <div class="pt-3 px-2"><filtre></filtre></div>
        <listeE></listeE>
        
    </div>
</template>
<script>
import filtre from '@/components/affichageExercices/filtre'
import listeE from '@/components/affichageExercices/listeE'
export default {
   components:{
       filtre,
       listeE,
   } 
}
</script>