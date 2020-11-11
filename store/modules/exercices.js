const state={
    optionsPartieExercice:['Conduites et enchainements','partie2'],
    optionsThemeExercice:['Echauffement','theme2'],
    optionsPhaseDeJeuxExercice:['Phase1','Phase2'],
    optionsProcedeExercice:['procede1','procede2'],
    optionsPedagogieExercice:['pedagogie1','pedagogie2'],
    optionsIntensiteExercice:['Intensite1','Intensite2'],
    optionsRecuperationExercice:['recuperation1','recuperation2'],
    ExerciceId:0,
    Exercices:[],
};
const getters={
    optionsPartieExercice(state){
        return state.optionsPartieExercice;
    },
    optionsThemeExercice(state){
        return state.optionsThemeExercice;
    },
    optionsPhaseDeJeuxExercice(state){
        return state.optionsPhaseDeJeuxExercice;
    },
    optionsProcedeExercice(state){
        return state.optionsProcedeExercice;
    },
    optionsPedagogieExercice(state){
        return state.optionsPedagogieExercice;
    },
    optionsIntensiteExercice(state){
        return state.optionsIntensiteExercice;
    },
    optionsRecuperationExercice(state){
        return state.optionsRecuperationExercice;
    },
    getExerciceId(state){
        return state.ExerciceId;
    },
    loadExercices(state){
        return state.Exercices;
    },
    getExerciceParId: (state)=>(valeur)=>{       
        for(let i=0;i<state.Exercices.length;i++){
            if(state.Exercices[i].id==valeur){
                return state.Exercices[i];
            }
        }   
    },
};
const actions={
    updateExerciceId(context,value){
        context.commit("updateExerciceId",value);
    },
    ajouterExercice(context,value){
        context.commit("ajouterExercice",value);
    },
    updateExercice(context,value){
        context.commit("updateExercice",value);
    },
    removeExercice(context,value){
        context.commit("removeExercice",value);
    },
};
const mutations={
    updateExerciceId(state,value){
        state.ExerciceId=value;
    },
    ajouterExercice(state,value){
        state.Exercices.push(value);
    },
    updateExercice(state,value){
        for(let i=0;i<state.Exercices.length;i++){
            if (state.Exercices[i].id==value.id){
              state.Exercices.splice(i,1,value);
            }
        }
    },
    removeExercice(state,value){
        for(let i=0;i<state.Exercices.length;i++){
            if(state.Exercices[i].id==value){
                state.Exercices.splice(i,1);
            }
        }
    },
};
export default{
    state,
    mutations,
    actions,
    getters
}