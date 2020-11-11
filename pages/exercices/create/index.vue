<template>
    <div>
        <headerMenu></headerMenu>
        <div style="margin-left:400px;margin-right:440px;">
        <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="1" >
            <Icon type="ios-paper" size="30"></Icon>
            <span v-on:click="loadInformation" class="text-xl">informations exercice </span>
        </MenuItem>
        <MenuItem name="2" >
            <Icon type="ios-add-circle" size="30"/>
            <span v-on:click="loadCreation" class="text-xl">creation exercice </span>
        </MenuItem>
        </Menu>
        </div>

        <div v-if="information==true">
        <div class="grid grid-cols-2 gap-10 mx-32">
            <div>
                <div class="flex mt-16 items-center">
                    <label for="input-default" class="text-xl font-medium">Nom</label>
                    <div class="w-2/5 rounded-md  h-8 " style="margin-left:9rem;">
                    <input v-model="exercice.nom" type="text" class="w-full bg-indigo-100 rounded-md focus:outline-none">
                    </div>
                </div>
                <span class="text-red-500 text-xs" v-if="controleNom==true"> * Le champ Nom est obligatoire</span>

                <div class="flex mt-12 items-center">
                    <label for="input-default" class="text-xl font-medium">Partie</label>
                    <div class="border-solid border border-blue-400 w-2/5 rounded-md  h-8" style="margin-left:8.5rem;">
                     <select v-model="exercice.partie" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
                     <option value="" selected disabled>Choisir votre Partie</option>
                     <option v-for="item in optionsPartieExercice" :key="item.name">{{item}}</option>
                     </select>
                    </div>
                    <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
                </div>
                <span class="text-red-500 text-xs" v-if="controlePartie==true"> * Le champ Partie est obligatoire</span>
                
                <div class="flex mt-12 items-center">
                    <label for="input-default" class="text-xl font-medium">Théme</label>
                    <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-32 h-8">
                     <select v-model="exercice.theme" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
                     <option value="" selected disabled>Choisir votre Théme</option>
                     <option v-for="item in optionsThemeExercice" :key="item.name">{{item}}</option>
                     </select>
                    </div>
                    <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
                </div>
                <span class="text-red-500 text-xs" v-if="controleTheme==true"> * Le champ Théme est obligatoire</span>

                <div class="flex mt-12 items-center">
                    <label for="input-default" class="text-xl font-medium">Phase de jeux</label>
                    <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-16 h-8">
                     <select v-model="exercice.phaseDeJeu" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
                     <option value="" selected disabled>Choisir Phase de jeux</option>
                     <option v-for="item in optionsPhaseDeJeuxExercice" :key="item.name">{{item}}</option>
                     </select>
                    </div>
                    <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
                </div>
                <div class="flex mt-12 items-center">
                    <label for="input-default" class="text-xl font-medium">Procédé</label>
                    <div class="border-solid border border-blue-400 w-2/5 rounded-md  h-8" style="margin-left:7.2rem;">
                     <select v-model="exercice.procede" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
                     <option value="" selected disabled>Choisir Procédé</option>
                     <option v-for="item in optionsProcedeExercice" :key="item.name">{{item}}</option>
                     </select>
                    </div>
                    <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
                </div>
                <div class="flex mt-12 items-center">
                    <label for="input-default" class="text-xl font-medium">Pédagogie</label>
                    <div class="border-solid border border-blue-400 w-2/5 rounded-md  h-8" style="margin-left:5.8rem;">
                     <select v-model="exercice.pedagogie" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
                     <option value="" selected disabled>Choisir Pédagogie</option>
                     <option v-for="item in optionsPedagogieExercice" :key="item.name">{{item}}</option>
                     </select>
                    </div>
                    <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
                </div>
                <div class="flex mt-12 items-center">
                    <label for="input-default" class="text-xl font-medium">Intensité</label>
                    <div class="border-solid border border-blue-400 w-2/5 rounded-md  h-8" style="margin-left:6.9rem;">
                     <select v-model="exercice.intensite" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
                     <option value="" selected disabled>Choisir Intensité</option>
                     <option v-for="item in optionsIntensiteExercice" :key="item.name">{{item}}</option>
                     </select>
                    </div>
                    <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
                </div>
                <div class="flex mt-12 items-center">
                    <label for="input-default" class="text-xl font-medium">Récupération</label>
                    <div class="border-solid border border-blue-400 w-2/5 rounded-md  h-8" style="margin-left:4.2rem;">
                     <select v-model="exercice.recuperation" class="text-blue-400 w-full pl-2 text-sm focus:outline-none">
                     <option value="" selected disabled>Choisir Récupération</option>
                     <option v-for="item in optionsRecuperationExercice" :key="item.name">{{item}}</option>
                     </select>
                    </div>
                    <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
                </div>
            </div>

            
            <div>
                <div class="flex mt-16 items-center">
                    <label for="input-default" class="text-xl font-medium">Durée(min)</label>
                    <div class="w-20 rounded-md  h-8 " style="margin-left:9rem;">
                    <input v-model="exercice.duree" type="number" class="w-full bg-indigo-100 rounded-md focus:outline-none text-center">
                    </div>
                </div>
                <span class="text-red-500 text-xs" v-if="controleDuree==true"> * Le champ Durée est obligatoire</span>

                <div class="flex mt-16 items-center">
                    <label for="input-default" class="text-xl font-medium">Durée de l'effort</label>
                    <div class="w-20 rounded-md  h-8 " style="margin-left:6.5rem;">
                    <input v-model="exercice.dureeEffort" type="number" class="w-full bg-indigo-100 rounded-md focus:outline-none text-center">
                    </div>
                </div>
                <div class="flex mt-16 items-center">
                    <label for="input-default" class="text-xl font-medium">Nombre de séries</label>
                    <div class="w-20 rounded-md  h-8 " style="margin-left:5.3rem;">
                    <input v-model="exercice.nombreSeries" type="number" class="w-full bg-indigo-100 rounded-md focus:outline-none text-center">
                    </div>
                </div>
                <div class="flex mt-16 items-center">
                    <label for="input-default" class="text-xl font-medium">Repos entre les séries</label>
                    <div class="w-20 rounded-md  h-8 " style="margin-left:2.7rem;">
                    <input v-model="exercice.repos" type="number" class="w-full bg-indigo-100 rounded-md focus:outline-none text-center">
                    </div>
                </div>

                <b-form-group class="mt-16 border-none">
                <label for="checkbox-group-2" class="text-xl font-medium">Catégorie</label>
                <b-form-checkbox-group id="checkbox-group-2"  name="flavour-2" v-model="exercice.categorie">
                <b-form-checkbox value="categorie1"> <img src="~/assets/man.png" width="20" alt=""> </b-form-checkbox>
                <b-form-checkbox value="categorie2"><img src="~/assets/man.png" width="30" alt=""></b-form-checkbox>
                <b-form-checkbox value="categorie3"><img src="~/assets/man.png" width="40" alt=""></b-form-checkbox>
                </b-form-checkbox-group>
                </b-form-group>
                <span class="text-red-500 text-xs" v-if="controleCategorie==true"> * Le champ Catégorie est obligatoire</span>

                <div class="flex mt-24 items-center">
                <label for="input-default" class="text-xl font-medium">Difficulté</label> 
                <div>
                <b-form-rating v-model="exercice.difficulte" variant="warning" stars="3" no-border inline></b-form-rating> 
                </div>
                </div>
                <span class="text-red-500 text-xs" v-if="controleDifficulte==true"> * Le champ Difficulté est obligatoire</span>

            </div>
        </div>

        <div class="flex justify-center ml-0">
            <button v-on:click="ajouterExercice" class="bg-blue-400 text-white rounded-md w-64 h-20 mt-12 text-3xl font-bold text-center focus:outline-none"> Valider</button>
        </div>

        </div>

        <div v-if="creation==true" class="grid grid-cols-2 mx-32">
            <div>
            <div class=" mt-16 ">
                <label for="input-default" class="text-xl font-medium">Objectif-Organisation</label>
                <div class="rounded-md  h-8 " style="width:400px;">
                    <b-form-textarea v-model="exercice.objectif" id="textarea-rows" placeholder="Objectif-Organisation" rows="3" class="w-full bg-indigo-100 rounded-md focus:outline-none"></b-form-textarea>
                </div>
            </div>
            <div class=" mt-16 ">
                <label for="input-default" class="text-xl font-medium">Consignes-Evolution</label>
                <div class=" rounded-md  h-8 " style="width:400px;">
                    <b-form-textarea v-model="exercice.consignes" id="textarea-rows" placeholder="Consignes-Evolution" rows="3" class="w-full bg-indigo-100 rounded-md focus:outline-none"></b-form-textarea>
                </div>
            </div>
            <div class=" mt-16 ">
                <label class="text-xl font-medium">Critéres de réalisation</label>
                <div class=" rounded-md  h-8 " style="width:400px;">
                    <b-form-textarea v-model="exercice.critere" placeholder="Critéres de réalisation" rows="3" class="w-full bg-indigo-100 rounded-md focus:outline-none"></b-form-textarea>
                </div>
            </div>
            </div>
            <div class="mt-16">
                <img src="~/assets/tactic.jpg" alt="">
            </div>
                
            
        </div>
        
        
        
        
        
        
   
    </div>
</template>
<script>
import headerMenu from '@/components/creationExercice/header'
    export default {
        data () {
            return {
               creation:false,
               information:true,


                controleNom:false,
                controlePartie:false,
                controleTheme:false,
                controleDuree:false,
                controleCategorie:false,
                controleDifficulte:false,


                exercice:{
                id:null,
                nom:null,
                partie:"",
                theme:"",
                phaseDeJeu:"",
                procede:"",
                pedagogie:"",
                intensite:"",
                recuperation:"",

                duree:null,
                dureeEffort:null,
                nombreSeries:null,
                repos:null,
                categorie:[],
                difficulte:0,

                objectif:"",
                consignes:"",
                critere:"",
                },
            }
        },
        components:{
           headerMenu 
        },
        methods:{
            loadCreation(){
                this.information=false;
                this.creation=true;
            },
            loadInformation(){
                
                this.creation=false;
                this.information=true;
            },
            ajouterExercice(){
                if (this.exercice.nom && this.exercice.partie &&this.exercice.theme &&this.exercice.duree &&this.exercice.categorie.length>0 &&this.exercice.difficulte) {
                this.exercice.id=this.$store.getters.getExerciceId;
                this.$store.dispatch('updateExerciceId',this.exercice.id+1);
                this.$store.dispatch('ajouterExercice',this.exercice);              
                this.$router.push('/exercices')
                
                }
                if(!this.exercice.nom){
                    this.controleNom=true;
                }else{
                    this.controleNom=false;
                }
                if(!this.exercice.partie){
                    this.controlePartie=true;
                }else{
                    this.controlePartie=false;
                }
                if(!this.exercice.theme){
                    this.controleTheme=true;
                }else{
                    this.controleTheme=false;
                }
                if(!this.exercice.duree){
                    this.controleDuree=true;
                }else{
                    this.controleDuree=false;
                }
                if(!this.exercice.categorie.length>0){
                    this.controleCategorie=true;
                }else{
                    this.controleCategorie=false;
                }
                if(!this.exercice.difficulte!=0){
                    this.controleDifficulte=true;
                }else{
                    this.controleDifficulte=false;
                }
            },
        },
        computed:{
        optionsPartieExercice(){
        return this.$store.getters.optionsPartieExercice;
        },
        optionsThemeExercice(){
          return this.$store.getters.optionsThemeExercice;  
        },
        optionsPhaseDeJeuxExercice(){
          return this.$store.getters.optionsPhaseDeJeuxExercice;  
        },
        optionsProcedeExercice(){
        return this.$store.getters.optionsProcedeExercice;
        },
        optionsPedagogieExercice(){
          return this.$store.getters.optionsPedagogieExercice;  
        },
        optionsIntensiteExercice(){
          return this.$store.getters.optionsIntensiteExercice;  
        },
        optionsRecuperationExercice(){
          return this.$store.getters.optionsRecuperationExercice;  
        },
        }
    }
</script>