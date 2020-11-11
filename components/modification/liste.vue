<template>
    <div class="mt-8  font-sans mx-20 ">
      <span class="text-xl font-semibold">Liste des exercices de la séance</span>
    <div class="grid grid-cols-4  mt-3 gap-y-6">
        <exerciceSupprimer v-for="item in list" :key="item.name" :exercice="item"></exerciceSupprimer>
    </div>
    </div>
</template>
<script>
import exerciceSupprimer from '@/components/creation/exerciceSupprimer'
export default {
  components:{
   exerciceSupprimer,
  },
  props:{
    list:{
      type:Array,
      required:true,
    }
  }
 
}
</script>