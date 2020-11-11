import Vuex from 'vuex';
import exercices from './modules/exercices'
const createStore=()=>{
    return new Vuex.Store({
        state:{
            listeDesExercices:[],
            listeDesExercicesSeance:[],
            optionsPartie:['Conduites et enchainements','partie2'],
            optionsTheme:['Echauffement','theme2'],
            idSeance:0,
            idExercice:0,
            idExerciceParSeance:0,
            themesSeance:['theme seance 1','theme seance 2'],
            phaseDuJeuSeance:['phase du jeu 1','phase du jeu 2'],
            cathegorieSeance:['cathegorie seance 1','cathegorie seance 2'],
            listeDesSeances:[],
            
            
        },
        mutations:{
            addExercice(state,exercice){
                let ex = {
                    id:null,
                    partie: '',
                    theme: ''
                };

                  ex.partie=exercice.partie;
                  ex.theme=exercice.theme;
                  ex.id=exercice.id;
                state.listeDesExercices.push(ex)
            },
            addExerciceSeance(state,exercice){
                let ex = {
                    id:null,
                    partie: '',
                    theme: ''
                };

                  ex.partie=exercice.partie;
                  ex.theme=exercice.theme;
                  ex.id=exercice.id;
                state.listeDesExercicesSeance.push(ex)
            },
            updateidSeance(state,value){
                state.idSeance=value;
            },
            updateidExercice(state,value){
                state.idExercice=value;
            },
            updateidExerciceParSeance(state,value){
                state.idExerciceParSeance=value;
            },
            addSeance(state,seance){
                state.listeDesSeances.push(seance)
            },
            emptyTabExercicesSeance(state){
                state.listeDesExercicesSeance.length = 0;
            },
            removeExerciceFromSeance(state,value){
                for(let i=0;i<state.listeDesExercicesSeance.length;i++){
                    if(state.listeDesExercicesSeance[i].id==value){
                        state.listeDesExercicesSeance.splice(i,1);
                    }
                }
            },
            updateSeance(state,value){
                for(var i=0;i<state.listeDesSeances.length;i++){
                    if (state.listeDesSeances[i].id==value.id){
                      state.listeDesSeances.splice(i,1,value);
                    }
                }
            },
            fillListeDesExercicesSeance(state,value){
                state.listeDesExercicesSeance = value;
            },
            removeSeance(state,value){
                for(let i=0;i<state.listeDesSeances.length;i++){
                    if(state.listeDesSeances[i].id==value){
                        state.listeDesSeances.splice(i,1);
                    }
                }
            },

        },
        actions:{
            addExercice(VuexContext,exercice){
                VuexContext.commit('addExercice',exercice)
            },
            addExerciceSeance(VuexContext,exercice){
                VuexContext.commit('addExerciceSeance',exercice)
            },
            updateidSeance(VuexContext,value){
                VuexContext.commit('updateidSeance',value)
            },
            updateidExercice(VuexContext,value){
                VuexContext.commit('updateidExercice',value)
            },
            updateidExerciceParSeance(VuexContext,value){
                VuexContext.commit('updateidExerciceParSeance',value)
            },
            addSeance(VuexContext,seance){
                VuexContext.commit('addSeance',seance)
            },
            emptyTabExercicesSeance(VuexContext){
                VuexContext.commit('emptyTabExercicesSeance')
            },
            removeExerciceFromSeance(VuexContext,value){
                VuexContext.commit('removeExerciceFromSeance',value)
            },
            updateSeance(VuexContext,value){
                VuexContext.commit('updateSeance',value)
            },
            fillListeDesExercicesSeance(VuexContext,value){
                VuexContext.commit('fillListeDesExercicesSeance',value)
            },
            removeSeance(VuexContext,value){
                VuexContext.commit('removeSeance',value)
            },
        },
        getters:{
            loadOptionsPartie(state){
                return state.optionsPartie;
            },
            loadOptionsTheme(state){
                return state.optionsTheme;
            },
            loadlisteDesExercices(state){
                return state.listeDesExercices;
            },
            loadlisteDesExercicesSeance(state){
                return state.listeDesExercicesSeance;
            },
            getidSeance(state){
                return state.idSeance;
            },
            getidExercice(state){
                return state.idExercice;
            },
            getidExerciceParSeance(state){
                return state.idExerciceParSeance;
            },
            loadThemesSeance(state){
                return state.themesSeance;
            },
            loadPhaseDuJeuSeance(state){
                return state.phaseDuJeuSeance;
            },
            loadCathegorieSeance(state){
                return state.cathegorieSeance;
            },
            loadlisteDesSeances(state){
                return state.listeDesSeances;
            },
            getSeanceParId: (state)=>(valeur)=>{
                
               
                    for(let i=0;i<state.listeDesSeances.length;i++){
                        if(state.listeDesSeances[i].id==valeur){
                            return state.listeDesSeances[i];
                        }
                    }

                

                
            },

        },
        modules:{
            exercices,
        }
    })
}
export default createStore;