<template>
    <div class="mt-12 font-sans mx-20">
      <span class="text-xl font-semibold">Liste des exercices de la séance</span>
    <div class="grid grid-cols-4 mt-3 gap-y-6">
     
        <!--<exercice v-for="item in list" :key="item.name" :exercice="item"></exercice>-->
        <exerciceSupprimer v-for="item in list" :key="item.name" :exercice="item"></exerciceSupprimer>
        
     
    </div>
    </div>
</template>
<script>
//import exercice from '@/components/creation/exercice'
import exerciceSupprimer from '@/components/creation/exerciceSupprimer'
export default {
  components:{
   // exercice,
   exerciceSupprimer,
  },
 /* props:{
    list:{
      type:Array,
      required:true,
    }
  }*/
  computed:{
    list(){
      return this.$store.getters.loadlisteDesExercicesSeance;
    }
  }
}
</script>