<template>
    <div class="grid grid-cols-2">
        <div class="mx-20">
           
            <b-row class="my-1">
             <b-col sm="2">
             <label for="input-default" class="text-lg">Nom:</label>
             </b-col>
             <b-col sm="10">
             <b-form-input id="input-default" ></b-form-input>
             </b-col>
             </b-row>

             <div class="flex mt-12">
             <label for="input-default" class="text-lg">Thème:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-24 h-8">
            <select class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled>Choisir le thématique</option>
             <option>thématique1</option>
            </select>
             </div>
             </div>
             
             

             <div class="flex mt-12">
             <label for="input-default" class="text-lg">Phase de jeux:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-10 h-8">
            <select class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled>Choisir le thématique</option>
             <option>thématique1</option>
            </select>
             </div>
             </div>
            
            

            <div class="flex mt-12">
             <label for="input-default" class="text-lg ">Cathégorie:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-16 h-8">
            <select class="text-blue-400 w-full pl-2 text-sm">
             <option value="" selected disabled >Choisir la cathégorie:</option>
             <option>cathégorie 1</option>
            </select>
             </div>
             </div>


            
        </div>
        <div class="mx-20">
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
                


             <div class="flex">
             <label for="input-default" class="text-lg">Thème 2:</label>
             <div class="border-solid border border-blue-400 w-2/5 rounded-md ml-12 h-8">
            <select class="text-blue-400 w-full pl-2 text-sm ">
             <option value="" selected disabled>Choisir le thématique</option>
             <option>thématique1</option>
            </select>
             </div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:'',
            selected: 'A',
         options: [
          { item: 'A', name: 'Club' },
          { item: 'B', name: 'Privé' },
         
        ]
        };
    }
}
</script>