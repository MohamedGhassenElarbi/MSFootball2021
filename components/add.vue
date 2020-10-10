<template>
    <div>
        <button v-on:click="ajouterExercice" class="bg-blue-400 text-white rounded-md w-56 h-10 ml-20 mt-16 text-xl font-hairline">Ajouter exercice</button>
        <div class="flex w-1/2 m-8 text-blue-400">

        <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12">
        <select v-model="exercice.partie" class="text-blue-400 w-full pl-6">
          <option value="" selected disabled>Choisir la partie</option>
          <option v-for="item in optionsPartie" :key="item.name" :value="item">{{item}}</option>
        </select>
        </div>

        <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12">
        <select v-model="exercice.theme" class="text-blue-400 w-full pl-6">
          <option value="" selected disabled>Choisir le thème</option>
          <option v-for="item in optionsTheme" :key="item.name">{{item}}</option>
        </select>
        </div>

       
    
        </div>
    </div>
</template>
<script>
export default {
    data(){return{
    exercice:{
      id:0,
      partie:'',
      theme:''
    },
    test:"123"
  }},
  computed:{
      optionsPartie(){
      return this.$store.getters.loadOptionsPartie;
    },
    optionsTheme(){
      return this.$store.getters.loadOptionsTheme;
    }},
    methods:{
    ajouterExercice(){
      this.exercice.id=this.$store.getters.getCount;
      this.$store.dispatch('updateCounter',this.exercice.id+1)
      this.$store.dispatch('addExercice',this.exercice)
    }
  },
  
}
</script>