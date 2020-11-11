<template>
    <div class="bg-gray-200 relative">
        
        <nameDate></nameDate>


        <div class="bg-white mt-12 mx-4 rounded-md overflow-hidden">
            <!--<headerMenu></headerMenu>-->
        
        <formseance :valeur="$route.params.id"></formseance>
        </div>

    </div>
</template>
<script>
import nameDate from  '@/components/affichage/headerAff'
//import headerMenu from '@/components/modification/header'
import formseance from '@/components/modification/formseance'
export default {
   components:{
      // headerMenu,
       formseance,
       nameDate 

   } 
}
</script>