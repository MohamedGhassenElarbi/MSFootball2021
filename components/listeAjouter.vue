<template>
    <div class="grid grid-cols-4 gap-1 mx-24 ">
      <div v-for="item in list" :key="item.name" >
        <exerciceAjouter :item="item"></exerciceAjouter>
      </div>  
    </div>
    
</template>
<script>
import exerciceAjouter from '@/components/exerciceAjouter'
export default {
  components:{
    exerciceAjouter,
  },
 /* props:{
    list:{
      type:Array,
      required:true,
    }
  }*/
  computed:{
    list(){
      return this.$store.getters.loadlisteDesExercices;
    }
  }
}
</script>