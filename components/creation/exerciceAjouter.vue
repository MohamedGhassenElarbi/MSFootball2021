<template>
<div class="w-64 rounded-lg h-68 bg-white font-sans shadowStyle mb-8">
  <exercice :exercice="item"></exercice>
  <button class="background rounded-b-lg text-center w-full h-10 text-xl focus:outline-none break-words" v-on:click="ajouterExercice">Ajouter à la séance</button>

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
      this.item.id=this.$store.getters.getidExerciceParSeance
      this.$store.dispatch('updateidExerciceParSeance',this.item.id+1)
      this.$store.dispatch('addExerciceSeance',this.item)
    }
  }
}
</script>
<style scoped>
.background{
  background-color: rgb(114, 242, 134);
}
.shadowStyle{
-webkit-box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);
-moz-box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);
box-shadow: 1px 11px 10px 6px rgba(171,225,235,0.66);
/*height:246px;*/
}
</style>