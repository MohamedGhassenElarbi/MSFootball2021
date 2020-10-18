<template>
<div class="w-64 rounded-lg h-68 bg-white font-mono shadow-lg mb-8">
  <exercice :exercice="item"></exercice>
  <button class="background rounded-b-lg text-center w-full h-10 text-xl" v-on:click="ajouterExercice">Ajouter a la séance</button>

</div>
</template>
<script>
import exercice from '@/components/creation/exercice'
export default {
  components:{
    exercice,
  },
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  methods:{
    ajouterExercice(){
      this.$store.dispatch('addExerciceSeance',this.item)
    }
  }
}
</script>
<style scoped>
.background{
  background-color: #12F680;
}
</style>