<template>
    <div class="flex justify-between bg-white mt-12 mx-4 h-10 rounded-md">
        <h4 class="ml-10 my-1 font-bold">Liste des Exercices</h4>
        <button v-on:click="creationSeance" class="bg-blue-400 text-white font-semibold rounded-md text-sm w-16 mr-4 my-1">Créer</button>
    </div>
</template>
<script>
export default {
  methods:{
      creationSeance(){
        this.$router.push('/exercices/create')
      }
  }  
}
</script>