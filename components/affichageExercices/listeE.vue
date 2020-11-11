<template>
    <div class="mt-3">
      
    <div class="grid grid-cols-4 gap-1 mx-24 mt-2">
      
        <exercice v-for="item in list" :key="item.name" :exercice="item"></exercice>

    </div>
    </div>
</template>
<script>
import exercice from '@/components/affichageExercices/exercice'
export default {
  components:{
    exercice,
  },

  computed:{
    list(){
      return this.$store.getters.loadExercices;
      
    }
  }
}
</script>