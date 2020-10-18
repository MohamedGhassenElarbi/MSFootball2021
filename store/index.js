import Vuex from 'vuex';

const createStore=()=>{
    return new Vuex.Store({
        state:{
            listeDesExercices:[],
            listeDesExercicesSeance:[],
            optionsPartie:['partie1','partie2'],
            optionsTheme:['theme1','theme2'],
            idSeance:0,
            themesSeance:['theme seance 1','theme seance 2'],
            phaseDuJeuSeance:['phase du jeu 1','phase du jeu 2'],
            cathegorieSeance:['cathegorie seance 1','cathegorie seance 2'],
            listeDesSeances:[],
            
        },
        mutations:{
            addExercice(state,exercice){
                let ex = {
                    partie: '',
                    theme: ''
                };
                  ex.partie=exercice.partie;
                  ex.theme=exercice.theme;
                state.listeDesExercices.push(ex)
            },
            addExerciceSeance(state,exercice){
                state.listeDesExercicesSeance.push(exercice)
            },
            updateidSeance(state,value){
                state.idSeance=value;
            },
            addSeance(state,seance){
                state.listeDesSeances.push(seance)
            },
            emptyTabExercicesSeance(state){
                state.listeDesExercicesSeance.length = 0
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
            addSeance(VuexContext,seance){
                VuexContext.commit('addSeance',seance)
            },
            emptyTabExercicesSeance(VuexContext){
                VuexContext.commit('emptyTabExercicesSeance')
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

        }
    })
}
export default createStore;