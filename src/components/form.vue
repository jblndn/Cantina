<template>
    <form class="form-add wrapper" @submit.prevent="onSubmit">
        <!-- title -->
        <div class="form-container">
            <label for="titre">Titre:</label>
            <input type="text" id="titre" v-model="$v.recipe.titre.$model">

            <span class="champError" v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.required">Le champs est requis</span>
            <span class="champError" v-if="$v.recipe.titre.$dirty && !$v.recipe.titre.alpha">Le champs ne doit contenir que des lettres</span>
        </div>
        <!-- description -->
        <div class="form-container">
            <label for="description">Description:</label>
            <textarea name="description" id="description" v-model="$v.recipe.description.$model" cols="30" rows="10"></textarea>
        
            <span class="champError" v-if="$v.recipe.description.$dirty && !$v.recipe.description.required">Le champs est requis</span>
        </div>
        <!-- niveau -->
        <div class="form-container">
            <label for="niveau">Niveau:</label>
            <select name="niveau" id="niveau" v-model="$v.recipe.niveau.$model">
                <option value="padawan">Padawan</option>
                <option value="jedi">Jedi</option>
                <option value="maitre">Maître</option>
            </select>

            <span class="champError" v-if="$v.recipe.niveau.$dirty && !$v.recipe.niveau.required">Le champs est requis</span>
        </div>
        <!-- personnes -->
        <div class="form-container">
            <label for="personnes">Nombre de personnes :</label>
            <input type="number" name="personnes" id="personnes" v-model.number="$v.recipe.personnes.$model" step="1">
            
            <span class="champError" v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.required">Le champs est requis</span>
            <span class="champError" v-if="$v.recipe.personnes.$dirty && !$v.recipe.personnes.integer">Nombre entier requis</span>
            <span class="champError" v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.between">Nombre positif requis</span>

        </div>
        <!-- temps -->
        <div class="form-container">
            <label for="temps">Temps de préparation (en min) :</label>
            <input type="number" name="temps" id="temps" v-model.number="$v.recipe.tempsPreparation.$model" step="5">
            
            <span class="champError" v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.required">Le champs est requis</span>
            <span class="champError" v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.integer">Nombre entier requis</span>
            <span class="champError" v-if="$v.recipe.tempsPreparation.$dirty && !$v.recipe.tempsPreparation.between">Nombre positif requis</span>

        </div>
        <!-- ingredient -->
        <div class="form-container">
            <label for="ingredients">Ingrédients :</label>
            <formIngredient v-for="(ingredient, index) in recipe.ingredients" :key="ingredient.id" :index="index" :recipe="recipe"/>
            <button type="button" @click="addIngredient">
                Ajouter un ingrédient
            </button>
        </div>
        <!-- etapes -->
        <div class="form-container">
            <label for="etapes">Etapes :</label>
            <ul class="container-step">
                <li class="one-step">
                    <textarea name="etape" id="etape" cols="30" rows="10"></textarea>
                    <button>
                        <i class="fas fa-times"></i>
                    </button>
                </li>
            </ul>
            <button type="button" @click="addStep">
                Ajouter une étape
            </button>
        </div>
        <!-- photo -->
        <div class="form-container">
            <label for="photo">Photo :</label>
            <input type="url" name="photo" id="photo" v-model="$v.recipe.photo.$model">

            <span v-if="!$v.recipe.photo">L'URL est invalide</span>
        </div>
        <div class="form-container">
            <button type="submit">
                Envoyer
            </button>
        </div>
    </form>
</template>

<script>
import { required, alpha, url, integer, between } from "vuelidate/lib/validators";
import Service from "../services/Service";
import formIngredient from "./formIngredient";

export default {
    name: 'Form',
    components: {
        formIngredient
    },
    props: {
        recipe: {
            type: Object,
            default: function(){
                return {
                    id: null,
                    titre: '',
                    description: '',
                    niveau: '',
                    personnes: '',
                    tempsPreparation: '',
                    ingredients: [""],
                    etapes: [""],
                    photo: '',
                }
            }
        }
    },
    validations: {
        recipe: {
            titre: {required, alpha},
            description: {required},
            niveau: {required},
            personnes: {required, integer, between: between(0,9999)},
            tempsPreparation: {required, integer, between: between(0,9999)},
            ingredients: {required},
            etapes: {required},
            photo: {url},
        }
    },
    methods: {
        addIngredient: function(){
            this.recipe.ingredients.push('');
        },
        addStep: function(){
            let oneStep = '<li class="one-step">'+
                    '<textarea name="etape" id="etape" cols="30" rows="10"></textarea>'+
                    '<button>'+
                        '<i class="fas fa-times"></i>'+
                    '</button>'+
                '</li>'

            $('.container-step').append(oneStep);
        },
        deleteIngredient: function(){
            console.log(this);
            this.$event.target.parent().removeChild(this.$event.target);
        },
        setIngredient: function(){
            
        },
        getIngredients: function(){
            let ingredientsDOM = document.querySelectorAll('.one-ingredient');
            let ingredients = [];

            for (let i = 0; i < ingredientsDOM.length; i++) {

                let ingredientValue = []

                let number = ingredientsDOM[i].querySelector('#nombre').value;
                let mesure = ingredientsDOM[i].querySelector('#mesure').value;
                let quantity = number + mesure;
                let name = ingredientsDOM[i].querySelector('#nom').value;

                ingredientValue.push(quantity,name)
                ingredients.push(ingredientValue)

            }
            this.recipe.ingredients = ingredients;
        },
        getSteps: function(){
            let stepDom = document.querySelectorAll('.one-step');
            let steps = [];

            for (let i = 0; i < stepDom.length; i++) {

                let stepValue = stepDom[i].querySelector('#etape').value;
                steps.push(stepValue)

            }
            this.recipe.etapes = steps;
        },
        onSubmit: function(){
            this.getIngredients();
            this.getSteps();
            if(this.$v.recipe.$invalid) 
            return this.$v.recipe.$touch();
            this.$emit('send', this.recipe)
        }
    }
}
</script>

<style scoped>

    .form-container{
        margin-bottom: 20px;
    }
</style>


