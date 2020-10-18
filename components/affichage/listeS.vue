<template>
    <div class="mt-3">
      
    <div class="grid grid-cols-4 gap-1 mx-24 mt-2">
      
        <seance v-for="item in list" :key="item.name" :seance="item"></seance>

    </div>
    </div>
</template>
<script>
import seance from '@/components/affichage/seance'
export default {
  components:{
    seance,
  },

  computed:{
    list(){
      return this.$store.getters.loadlisteDesSeances;
    }
  }
}
</script>