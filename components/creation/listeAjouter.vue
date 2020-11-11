<template>
    <div class="grid grid-cols-4  mx-20 ">
      <div v-for="item in list" :key="item.name" >
        <exerciceAjouter :item="item"></exerciceAjouter>
      </div>  
    </div>
    
</template>
<script>
import exerciceAjouter from '@/components/creation/exerciceAjouter'
export default {
  components:{
    exerciceAjouter,
  },
  computed:{
    list(){
      return this.$store.getters.loadlisteDesExercices;
    }
  }
}
</script>