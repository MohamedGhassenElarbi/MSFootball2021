<template>
    <div>
    <div class="grid grid-cols-2 ">
        <div class="ml-24 font-sans">

             <div class="flex mt-16 items-center">
             <label for="input-default" class="text-xl font-medium">Nom</label>
             <div class="w-2/5 rounded-md ml-24 h-8 ">
            <input v-model="seance.nom" type="text" class="w-full bg-indigo-100 rounded-md focus:outline-none">
             </div>
             </div>
             <span class="text-red-500 text-xs" v-if="controleNom==true"> * Le champ Nom est obligatoire</span>

             <div class="flex mt-12 items-center">
             <label for="input-default" class="text-xl font-medium">Thème</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-20 h-8">
            <select v-model="seance.theme" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsThemeSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>
             
             

             <div class="flex mt-12 items-center">
             <label for="input-default" class="text-xl font-medium">Phase de jeux</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-3 h-8">
            <select v-model="seance.phaseDeJeu" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsPhaseDuJeuSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
              <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>
            
            

            <div class="flex mt-12 items-center">
             <label for="input-default" class="text-xl font-medium">Cathégorie</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-10 h-8">
            <select v-model="seance.cathegorie" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
             <option value="" selected disabled >Choisir la cathégorie:</option>
             <option v-for="item in optionsCathegorieSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
              <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>


            
        </div>
        <div class="mx-20 mt-12 ml-0">
            <b-row class="my-1">
             <b-col sm="2">
             <label for="input-default" class="text-xl font-medium">Type</label>
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
             <span class="text-red-500 text-xs" v-if="controleType==true"> * Le champ Type est obligatoire</span>
                


             <div class="flex mt-12 items-center">
             <label for="input-default" class="text-xl font-medium">Thème 2</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12 h-8">
            <select v-model="seance.theme2" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsThemeSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>


             <div class="flex mt-32 items-center">
                <label for="input-default" class="text-xl font-medium">Difficulté</label> 
                <div>
                <b-form-rating v-model="seance.difficulte" variant="warning" stars="3" no-border inline></b-form-rating> 
              </div>
             </div>

             
        </div>
        
    </div>
    <liste></liste>
    <add></add>
    <listeAjouter ></listeAjouter>
    <div class="flex justify-center ml-0">
    <button v-on:click="ajouterSeance" class="colorSituation text-white rounded-md w-64 h-20 mt-12 text-3xl font-bold text-center focus:outline-none"> Valider</button>
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
        controleNom:false,
        controleType:false,
        seance:{
            id:null,
            nom:null,
            theme:"",
            theme2:"",
            phaseDeJeu:"",
            cathegorie:"",
            difficulte:0,
            type:null,
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
      if (this.seance.nom && this.seance.type) {
        this.seance.id=this.$store.getters.getidSeance;
        this.$store.dispatch('updateidSeance',this.seance.id+1)
        this.seance.exercicesSeance=[...this.$store.getters.loadlisteDesExercicesSeance];
        this.$store.dispatch('emptyTabExercicesSeance')
        this.$store.dispatch('addSeance',this.seance)
        this.$router.push('/seances')
      }
      if(!this.seance.nom){
        this.controleNom=true;
      }else{
        this.controleNom=false;
      }
      if(!this.seance.type){
        this.controleType=true;
      }else{
        this.controleType=false;
      }
      
      
    }
  }
    
}
</script>
<style scoped>
.colorSituation{
  background-color: rgb(100, 169, 225)
}
</style>