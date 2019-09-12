<template>
    <div class="container centered">
        <h1 class="title-home">
            Bienvenue sur Cantina
        </h1>
        <div class="container-cards">
            <card v-for="recipe in recipesList" :recipe="recipe" :key="recipe.id"/>
        </div>  

    </div>
</template>

<script>
import card from '../components/card.vue';
import Service from '../services/Service.js'

export default {
    name: 'home',
    components: { 
        card
    },
    data: function() {
        return {
            recipesList: null
        }
    },  
    created: function(){
        Service
        .fetchAll()
        .then(recipesList => {
            this.recipesList = recipesList
        })
    } 
};
</script>
<style>
    .container-cards{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;
    }
    .font-menu{
        font-size: 22px;
        line-height: 25px;
    }
    .title-card{
        font-size: 18px;
        line-height: 22px;
    }
    .title-home{
        font-size: 50px;
        text-align: center;
        margin: 40px 0;
    }
</style>
