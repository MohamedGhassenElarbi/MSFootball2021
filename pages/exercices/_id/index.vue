<template>
    <div class="bg-gray-200 relative">
        
        <nameDate></nameDate>


        <div class="bg-white mt-12 mx-4 rounded-md overflow-hidden">
        
        <formExercice :valeur="$route.params.id"></formExercice>
        </div>

    </div>
</template>
<script>
import nameDate from  '@/components/affichage/headerAff'
import formExercice from '@/components/modificationExercice/formExercice'
export default {
   components:{
       formExercice,
       nameDate 

   } 
}
</script>