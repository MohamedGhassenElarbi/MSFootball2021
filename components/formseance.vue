<template>
    <div class="grid grid-cols-2">
        <div class="mx-20">

             <div class="flex mt-12">
             <label for="input-default" class="text-lg">Nom:</label>
             <div class="w-2/5 rounded-md ml-24 h-8 ">
            <input type="text" class="w-full bg-indigo-100 rounded-md">
             </div>
             </div>

             <div class="flex mt-12 items-center">
             <label for="input-default" class="text-lg">Thème:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-20 h-8">
            <select class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled>Choisir le thématique</option>
             <option>thématique1</option>
            </select>
             </div>
             <div class="text-blue-500 ml-6 mt-0"><p class="h2 mb-2"><b-icon icon="plus-circle-fill"></b-icon></p></div>
             </div>
             
             

             <div class="flex mt-12">
             <label for="input-default" class="text-lg">Phase de jeux:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-6 h-8">
            <select class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled>Choisir le thématique</option>
             <option>thématique1</option>
            </select>
             </div>
             </div>
            
            

            <div class="flex mt-12">
             <label for="input-default" class="text-lg ">Cathégorie:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12 h-8">
            <select class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled >Choisir la cathégorie:</option>
             <option>cathégorie 1</option>
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
             v-model="selected"
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
             <option>thématique1</option>
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
</template>
<script>
export default {
    data(){
        return{
            text:'',
            selected: '',
         options: [
          { item: 'A', name: 'Club' },
          { item: 'B', name: 'Privé' },
         
        ]
        };
    }
}
</script>