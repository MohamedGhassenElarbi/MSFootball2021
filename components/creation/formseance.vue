<template>
    <div>
    <div class="grid grid-cols-2">
        <div class="mx-20">

             <div class="flex mt-12">
             <label for="input-default" class="text-lg">Nom:</label>
             <div class="w-2/5 rounded-md ml-24 h-8 ">
            <input v-model="seance.nom" type="text" class="w-full bg-indigo-100 rounded-md">
             </div>
             </div>

             <div class="flex mt-12 items-center">
             <label for="input-default" class="text-lg">Thème:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-20 h-8">
            <select v-model="seance.theme" class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsThemeSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>
             
             

             <div class="flex mt-12">
             <label for="input-default" class="text-lg">Phase de jeux:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-6 h-8">
            <select v-model="seance.phaseDeJeu" class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsPhaseDuJeuSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             </div>
            
            

            <div class="flex mt-12">
             <label for="input-default" class="text-lg ">Cathégorie:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12 h-8">
            <select v-model="seance.cathegorie" class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled >Choisir la cathégorie:</option>
             <option v-for="item in optionsCathegorieSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             </div>


            
        </div>
        <div class="mx-20 mt-12 ml-0">
            <b-row class="my-1">
             <b-col sm="2">
             <label for="input-default" class="text-lg">Type:</label>
             </b-col>
             <b-col sm="10">
             <b-form-radio-group
             v-model="seance.type"
             :options="options"
             class="mb-3"
             value-field="item"
             text-field="name"
            disabled-field="notEnabled"
            ></b-form-radio-group>
             </b-col>
             </b-row>
                


             <div class="flex mt-12 items-center">
             <label for="input-default" class="text-lg">Thème 2:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12 h-8">
            <select class="text-blue-400 w-full pl-2 text-sm ">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsThemeSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>


             <div class="flex mt-32 items-center">
                <label for="input-default" class="text-lg">Difficulté</label> 
                <div class="text-yellow-500 ml-6 mt-0"><p class="h6 mb-2"><b-icon icon="star-fill"></b-icon></p></div>
                <div class="text-yellow-500 mt-0"><p class="h6 mb-2"><b-icon icon="star-fill"></b-icon></p></div>
                <div class="text-yellow-500 mt-0"><p class="h6 mb-2"><b-icon icon="star-fill"></b-icon></p></div>
             </div>
        </div>
        
    </div>
    <liste></liste>
    <add></add>
    <listeAjouter ></listeAjouter>
    <div class="flex justify-center ml-0">
    <button v-on:click="ajouterSeance" class="bg-blue-400 text-white rounded-md w-64 h-20 mt-16 text-3xl font-bold text-center"> Valider</button>
    </div>
    </div>
</template>
<script>
import liste from '@/components/creation/liste'
import add from '@/components/creation/add'
import listeAjouter from '@/components/creation/listeAjouter'
export default {
    components:{
        liste,
        add,
        listeAjouter,
    },
    data(){
        return{
            
           
         options: [
          { item: 'A', name: 'Club' },
          { item: 'B', name: 'Privé' },
         
        ],

        seance:{
            id:null,
            nom:"",
            theme:"",
            phaseDeJeu:"",
            cathegorie:"",
            difficulte:"",
            type:"",
            exercicesSeance:[]
        },
        };
    },
    computed:{
        optionsThemeSeance(){
        return this.$store.getters.loadThemesSeance;
        },
        optionsPhaseDuJeuSeance(){
          return this.$store.getters.loadPhaseDuJeuSeance;  
        },
        optionsCathegorieSeance(){
          return this.$store.getters.loadCathegorieSeance;  
        },
    },
    methods:{
    ajouterSeance(){
      this.seance.id=this.$store.getters.getidSeance;
      this.$store.dispatch('updateidSeance',this.seance.id+1)
      this.seance.exercicesSeance=[...this.$store.getters.loadlisteDesExercicesSeance];
      this.$store.dispatch('emptyTabExercicesSeance')
      this.$store.dispatch('addSeance',this.seance)
      this.$router.push('/seances')
    }
  }
    
}
</script>