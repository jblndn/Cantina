<template>
    <div class="container col-lg-">
        <h1 class="title-home">
            Bienvenue sur Cantina
        </h1>
        <form class="filter-container" @submit.prevent>
            <label for="filter" class="title-filtre">Filtres :</label>

            <div class="filter-group">
                <label for="nom" class="label-filter">Nom:</label>
                <input type="search" name="nom" placeholder="Tapez un nom ..." v-model="filterTitle">
            </div>
        
            <div class="filter-group">
                <label for="niveau" class="label-filter">Niveau :</label>
                <select name="niveau" v-model='filterLevel'>
                    <option value="all">Tout</option>
                    <option value="padawan">Padawan</option>
                    <option value="jedi">Jedi</option>
                    <option value="maitre">Maître</option>
                </select>
            </div>

            <div class="filter-group">
                <label for="number" class="label-filter">Nbr de personnes :</label>
                <span>Entre</span>
                <input type="number" v-model="filterPeople1" placeholder="0">
                <span>et</span>
                <input type="number" v-model="filterPeople2" placeholder="4">
            </div>

            <div class="filter-group">
                <label for="time" class="label-filter">Temps de préparation :</label>
                <input type="number" step="5" v-model="filterTime" placeholder="15min">
            </div>
        </form>
        <div class="container-cards" v-if="recipesList">
            <card v-for="recipe in filteredRecipes" :recipe="recipe" :key="recipe.id" @remove='removeRecipe'/>
        </div>  

    </div>
</template>

<script>
import card from '../components/card.vue';
import Service from '../services/Service.js'
import Toasted from 'vue-toasted'

export default {
    name: 'home',
    components: { 
        card
    },
    data: function() {
        return {
            recipesList: null,
            filterTitle: '',
            filterLevel: '',
            filterPeople1: '',
            filterPeople2: '',
            filterTime: '',
        }
    },  
    computed: {
        filteredRecipes: function() {
            return this.recipesList.filter(({ titre, tempsPreparation, personnes, niveau }) => {
                let filterValue;
                let filterTitle = this.filterTitle.toLowerCase();
                let filterTime = this.filterTime === '' ? 99999 : this.filterTime;
                let filterPeople1 = this.filterPeople1 === '' ? 0 : this.filterPeople1 ;
                let filterPeople2 = this.filterPeople2 === '' ? 99999 : this.filterPeople2;
                let filterLevel = this.filterLevel.toLowerCase() === 'all' ? '' : this.filterLevel;
                titre = titre.toLowerCase();
                niveau = niveau.toLowerCase();
                
                filterValue = titre.includes(filterTitle) && tempsPreparation <= filterTime && personnes >= filterPeople1 && personnes <= filterPeople2 && niveau.includes(filterLevel);
                return filterValue

            });
        }
    },
    methods: {
        removeRecipe: function(recipeDelete){
            Service.removeRecipe(recipeDelete).then(res => {
                    let index = this.recipesList.indexOf(recipeDelete);
                    if (index > -1){
                        this.recipesList.splice(index, 1);
                    }
                    this.$toasted.success(`Recette ${res.recette.titre} suprrimé !`)
        })
        .catch(errorMessage => alert(errorMessage))}
    },
    created: function(){
        Service
        .fetchAll()
        .then(recipesList => {
            this.recipesList = recipesList
        })
    } 
}
</script>
<style lang="scss">
    $red: #ec5b4a;

    
    .filter-container{
        margin: 30px 0;
            font-family: 'Nunito';

        .title-filtre{
            font-weight: bold;
            font-size: 1.8rem;
            display: block;
            color: $red;
        }
        .filter-group{
            display: block;
            margin-bottom: 10px;    
            .label-filter{
                margin-right: 5px;
            }
            input{
                padding: 3px 8px;
                margin: 0 5px
            }
        }
    }
    .container-cards{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;
    }

</style>
