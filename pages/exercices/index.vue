<template>
    <div class="bg-gray-200 h-screen">
        <headerMenu></headerMenu>
        <addExercice></addExercice>
        <exercicesList></exercicesList>
        
    </div>
</template>
<script>
import headerMenu from '@/components/affichage/headerAff'
import addExercice from '@/components/affichageExercices/addExercice'
import exercicesList from '@/components/affichageExercices/exercicesList'

export default {
   components:{
      headerMenu, 
      addExercice,
      exercicesList,
      
   } 
}
</script>