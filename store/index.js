import Vuex from 'vuex';

const createStore=()=>{
    return new Vuex.Store({
        state:{
            listeDesExercices:[],
            listeDesExercicesSeance:[],
            optionsPartie:['partie1','partie2'],
            optionsTheme:['theme1','theme2'],
            count:0
            
        },
        mutations:{
            addExercice(state,exercice){
                state.listeDesExercices.push(exercice)
            },
            addExerciceSeance(state,exercice){
                state.listeDesExercicesSeance.push(exercice)
            },
            updateCounter(state,value){
                state.count=value;
            },

        },
        actions:{
            addExercice(VuexContext,exercice){
                VuexContext.commit('addExercice',exercice)
            },
            addExerciceSeance(VuexContext,exercice){
                VuexContext.commit('addExerciceSeance',exercice)
            },
            updateCounter(VuexContext,value){
                VuexContext.commit('updateCounter',value)
            }
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
            getCount(state){
                return state.count;
            }

        }
    })
}
export default createStore;