<template>
    <div class="background h-32 bg-cover flex justify-end">
        <div class="mr-16 flex">
        <h1 class="text-white text-center py-8 marginRight">Ajouter une séance</h1>
        <div  v-on:click="quitter" class="text-white py-8" ><b-icon icon="x-circle" font-scale="4"></b-icon></div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        quitter(){
            this.$router.push('/seances')
        }
    }
}
</script>
<style scoped>
.background{
background-image: url('https://lh3.googleusercontent.com/proxy/amVmZ5YxZe56hfNxCQhRaWd9mWOxO9pKg4aQ3d1x_DozaG_Zc--neWwGPIsqc1n1SXN0Vcjj0PGKJVaozhGmxkJH9SqljG4ALVGB')
}
.marginRight{
    margin-right: 400px;
}
</style>