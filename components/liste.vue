<template>
    <div class="mt-8 ">
      <span class="text-lg ml-24">Liste des exercices de la séance</span>
    <div class="grid grid-cols-4 gap-1 mx-24 mt-2">
      
        <exercice v-for="item in list" :key="item.name" :exercice="item"></exercice>

    </div>
    </div>
</template>
<script>
import exercice from '@/components/exercice'
export default {
  components:{
    exercice,
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