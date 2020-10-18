<template>
    <div class="bg-white mx-4 mt-3 rounded-md bg-gray-800 ">
        <div class="pt-3 px-2"><filtre></filtre></div>
        <listeS></listeS>
        
    </div>
</template>
<script>
import filtre from '@/components/affichage/filtre'
import listeS from '@/components/affichage/listeS'
export default {
   components:{
       filtre,
       listeS,
   } 
}
</script>