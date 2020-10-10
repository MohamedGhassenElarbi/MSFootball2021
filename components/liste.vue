<template>
    <div class="grid grid-cols-4 gap-1 mx-24">
        <exercice v-for="item in list" :key="item.name" :exercice="item"></exercice>

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