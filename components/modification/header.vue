<template>
    <div class="background h-32 bg-cover flex justify-end">
        <div class="mr-16 flex">
        <h1 class="text-white text-center py-8 marginRight" style="font-size: 50px;">Modifier une séance</h1>
        <!--<div  v-on:click="quitter" class="text-white py-8 cursor-pointer" ><b-icon icon="x-circle" font-scale="4"></b-icon></div>-->
        </div>
    </div>
</template>
<script>
export default {
    methods:{
       /* quitter(){
            this.$emit("exitmodif")
            //this.$router.push('/seances')
        }*/
    }
}
</script>
<style scoped>
.background{
background-image: url('~assets/cover.jpg');
}
.marginRight{
    margin-right: 400px;
}
</style>