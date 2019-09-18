<template>
    <div class="container-recipe container col-lg-">
        <div class="intro ">
            <img :src="this.recipe.photo" alt="Photo recette" class="img-recipe">
            <div class="container-text">
                <h1 class="title">
                    {{ this.recipe.titre}}
                </h1>
                <p>
                    {{ this.recipe.description}}
                </p>
                <div class="info">
                    <span>
                        Niveau :
                    </span>
                    <span class="level">
                        {{ this.recipe.niveau}}
                    </span>
                </div>
                <span class="info">
                    {{ this.recipe.personnes}}
                    <i class="fas fa-user"></i>
                </span>
                <span class="info">
                    {{ this.recipe.tempsPreparation}}min
                    <i class="fas fa-clock"></i>
                </span>
            </div>
        </div>

        <div class="container-ingredients">
            <h2 class="subtitle">
                Liste des ingrédients
            </h2>
            <ul class="ul-ingredients">
                <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                    <i class="fas fa-circle"></i>
                    {{ ingredient[0]}}
                    {{ ingredient[1]}}
                </li>
            </ul>
        </div>

        <div class="container-etapes">
            <h2 class="subtitle">
                Liste des étapes
            </h2>
            <ul class="ul-etapes">
                <li v-for="etape in recipe.etapes" :key="etape.id">
                    <i class="fas fa-circle"></i>
                    {{ etape}}
                </li>
            </ul>
        </div>

        <div class="container-btn">
            <button class="btn-recipe" type="button" @click="editRecipe">
                Editer
            </button>
            <button class="btn-recipe" type="button" @click="deleteRecipe(recipe)">
                Supprimer
            </button>
        </div>
    </div>
</template>

<script>

import Service from '../services/Service.js'

export default {
    name: 'recipe',
    data: function(){
        return {
            recipe: null,
            recipesList: null
        }
    },
    methods: {
        editRecipe: function(){
            this.$emit('edit', this.recipe)
            this.$router.replace(`/edit/${this.recipe.id}`);
        },
        deleteRecipe: function(recipeDelete){
            if (confirm('Voulez-vous supprimer cette recette ?')) {
                this.$emit('remove', this.recipe);
                Service.removeRecipe(recipeDelete).then(res => {
                        let index = this.recipesList.indexOf(recipeDelete);
                        if (index > -1){
                            this.recipesList.splice(index, 1);
                        }
                        this.$router.replace('/')
                        this.$toasted.success(`Recette ${res.recette.titre} suprrimé !`)
                })
                .catch(errorMessage => alert(errorMessage))
            }
        }
        
    },
    created: function(){
        Service
        .fetchOne(this.$route.params.id)
        .then(recipe => {
            this.recipe = recipe;
        });
        Service
        .fetchAll()
        .then(recipesList => {
            this.recipesList = recipesList
        })
    }
}
</script>
<style lang="scss" scoped>
$red: #ec5b4a;
$grey: #999999;

.container-recipe{
    margin: 0 auto;
    padding: 80px 0;
    
    .intro{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        @media only screen and (max-width: 500px) {
            flex-direction: column;
        }
        .img-recipe{
            max-width: 550px;

            @media only screen and (max-width: 500px) {
                width: 100%;
            }
        }
        .container-text{
            margin-top: 60px;
            margin-left: 80px;
            color: $grey;
            @media only screen and (max-width: 500px) {
                margin-left: 50px;
            }
            .title{
                color: $red;
                text-transform: uppercase;
                margin-bottom: 20px;
            }
            p{
                margin-bottom: 35px;
            }
            .info{
                display: block;
                margin-right: 15px;
                margin-bottom: 20px;
                font-size: 1.3rem;
                i{
                    color: $red;
                    font-size: 1.3rem;
                }
                .level{
                    color: $red;
                }
            }
        }
    }
    .container-ingredients{
        margin: 90px auto;
        .subtitle{
            text-align: center;
            margin-bottom: 20px;
        }
        .ul-ingredients{
            width: 80%;
            margin: 0 auto;
            li{
                margin-bottom: 10px;
            }
            .fa-circle{
                font-size: 0.5rem;
                color: $red;
                margin-right: 5px;
            }
        }
    }
    .container-etapes{
        margin: 0 auto 90px auto;
        .subtitle{
            text-align: center;
            margin-bottom: 20px;
        }
        .ul-etapes{
            width: 80%;
            margin: 0 auto;
            li{
                margin-bottom: 10px;
            }
            .fa-circle{
                font-size: 0.5rem;
                color: $red;
                margin-right: 5px;

            }
        }
    }
    .container-btn{
        display: flex;
        justify-content: space-between;
        align-items: center;

        button{
            border: none;
            background-color: $red;
            color: white;
            padding: 5px 10px;
            font-family: 'Nunito';
        }
    }
}
</style>

