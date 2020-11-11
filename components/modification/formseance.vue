<template>
    <div>
      <headerMenu></headerMenu>
    <div class="grid grid-cols-2">
        <div class="mx-20">
            
            
             <div class="flex mt-12">
             <label for="input-default" class="text-lg">Nom:</label>
             <div class="w-2/5 rounded-md ml-24 h-8 ">
            <input v-model="seance.nom" type="text" class="w-full bg-indigo-100 rounded-md focus:outline-none"/>
             </div>
             </div>
             <span class="text-red-500 text-xs" v-if="controleNom==true"> * Le champ Nom est obligatoire</span>


             <div class="flex mt-12 items-center">
             <label for="input-default" class="text-lg">Thème:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-20 h-8">
            <select v-model="seance.theme" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsThemeSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>
             
             

             <div class="flex mt-12">
             <label for="input-default" class="text-lg">Phase de jeux:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-6 h-8">
            <select v-model="seance.phaseDeJeu" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsPhaseDuJeuSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             </div>
            
            

            <div class="flex mt-12">
             <label for="input-default" class="text-lg ">Cathégorie:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12 h-8">
            <select v-model="seance.cathegorie" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
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
             <span class="text-red-500 text-xs" v-if="controleType==true"> * Le champ Type est obligatoire</span>
                


             <div class="flex mt-12 items-center">
             <label for="input-default" class="text-lg">Thème 2:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12 h-8">
            <select  v-model="seance.theme2" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
             <option value="" selected disabled>Choisir le thématique</option>
             <option v-for="item in optionsThemeSeance" :key="item.name">{{item}}</option>
            </select>
             </div>
             <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>


             <div class="flex mt-32 items-center">
                <label for="input-default" class="text-lg">Difficulté</label> 
                <div>
                <b-form-rating v-model="seance.difficulte" variant="warning" stars="3" no-border inline></b-form-rating> 
              </div>
             </div>
        </div>
        
    </div>
    <liste :list="seance.exercicesSeance"></liste>
    <add></add>
    <listeAjouter ></listeAjouter>
    <div class="flex justify-center ml-0">
    <button v-on:click="majSeance" class="bg-blue-400 text-white rounded-md w-64 h-20 mt-16 text-3xl font-bold text-center focus:outline-none"> Valider</button>
    </div>
    </div>
</template>
<script>
import headerMenu from '@/components/modification/header'
import liste from '@/components/modification/liste'
import add from '@/components/creation/add'
import listeAjouter from '@/components/creation/listeAjouter'
export default {
    props:{
    valeur:{
      type:String,
      required:true
    }
    },
    components:{
        liste,
        add,
        listeAjouter,
        headerMenu
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
            nom:"",
            theme:"",
            theme2:"",
            phaseDeJeu:"",
            cathegorie:"",
            difficulte:0,
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
    majSeance(){
      if (this.seance.nom && this.seance.type) {
      this.seance.exercicesSeance=[...this.$store.getters.loadlisteDesExercicesSeance];
      this.$store.dispatch('emptyTabExercicesSeance')
      this.$store.dispatch('updateSeance',this.seance)
      this.$router.push('/seances')
      }
      if(!this.seance.nom){
        this.controleNom=true;
      }
      if(!this.seance.type){
        this.controleType=true;
      }
    },
    loadSeance(){
          let v = this.$store.getters.getSeanceParId(Number(this.valeur)); 
          this.seance.id=v.id
          this.seance.nom=v.nom
          this.seance.theme=v.theme
          this.seance.theme2=v.theme2
          this.seance.phaseDeJeu=v.phaseDeJeu
          this.seance.cathegorie=v.cathegorie
          this.seance.difficulte=v.difficulte
          this.seance.type=v.type
          this.$store.dispatch('fillListeDesExercicesSeance',v.exercicesSeance)
          
          this.seance.exercicesSeance = this.$store.getters.loadlisteDesExercicesSeance 
          
        },
        /*exitmodif(){
          
          

          console.log(this.$store.getters.loadObjetAux )
          this.$store.dispatch('updateSeance',this.$store.getters.loadObjetAux )
          this.$router.push('/seances')
          //this.$store.dispatch('emptyTabExercicesSeance')
        },*/
  },
  mounted (){
    this.loadSeance();
  },
 
  
    
}
</script>
