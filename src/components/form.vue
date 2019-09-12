<template>
    <form class="form-add wrapper" @submit.prevent="onSubmit">
        <div class="form-container">
            <label for="titre">Titre:</label>
            <input type="text" id="titre" v-model="recipe.titre">
        </div>
        <div class="form-container">
            <label for="description">Description:</label>
            <textarea name="description" id="description" v-model="recipe.description" cols="30" rows="10"></textarea>
        </div>
        <div class="form-container">
            <label for="niveau">Niveau:</label>
            <select name="niveau" id="niveau" v-model="recipe.niveau">
                <option value="padawan">Padawan</option>
                <option value="jedi">Jedi</option>
                <option value="maitre">Maître</option>
            </select>
        </div>
        <div class="form-container">
            <label for="personnes">Nombre de personnes :</label>
            <input type="number" name="personnes" id="personnes" v-model="recipe.personnes" step="1">
        </div>
        <div class="form-container">
            <label for="temps">Temps de préparation (en min) :</label>
            <input type="number" name="temps" id="temps" v-model="recipe.tempsPreparation" step="5">
        </div>
        <div class="form-container">
            <label for="ingredients">Ingrédients :</label>
            <ul class="container-ingredient">
                <li class="one-ingredient">
                    <input type="number" id="nombre">
                    <select name="mesure" id="mesure">
                        <option value=""> </option>
                        <option value="l">l</option>
                        <option value="dl">dl</option>
                        <option value="cl">cl</option>
                        <option value="ml">ml</option>
                        <option value="g">g</option>
                        <option value="dg">dg</option>
                        <option value="cg">cg</option>
                        <option value="mg">mg</option>
                    </select>
                    <input type="text" id="nom">
                    <button type="button" @click="deleteIngredient">
                        <i class="fas fa-times"></i>
                    </button>
                </li>
            </ul>
            <button type="button" @click="addIngredient">
                Ajouter un ingrédient
            </button>
        </div>
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
        <div class="form-container">
            <label for="photo">Photo :</label>
            <input type="url" id="photo" v-model="recipe.photo">
        </div>
        <div class="form-container">
            <button type="submit">
                Envoyer
            </button>
        </div>
    </form>
</template>

<script>

export default {
    name: 'Form',
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
                    ingredients: [],
                    etapes: [],
                    photo: '',
                }
            }
        }
    },
    methods: {
        addIngredient: function(){
            let oneIngredient = '<li class="one-ingredient">'+
                    '<input type="number" id="nombre">'+
                    '<select name="mesure" id="mesure">'+
                        '<option value="empty"> </option>'+
                        '<option value="l">l</option>'+
                        '<option value="dl">dl</option>'+
                        '<option value="cl">cl</option>'+
                        '<option value="ml">ml</option>'+
                        '<option value="g">g</option>'+
                        '<option value="dg">dg</option>'+
                        '<option value="cg">cg</option>'+
                        '<option value="mg">mg</option>'+
                    '</select>'+
                    '<input type="text" id="nom">'+
                    '<button type="button" @click="deleteIngredient">'+
                        '<i class="fas fa-times"></i>'+
                    '</button>'+
                '</li>'

            $('.container-ingredient').append(oneIngredient);
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
        // getTitle: function(){
        //     let titleValue = document.querySelector('#titre').value;

        //     this.recipe.titre = titleValue;
        // },
        // getDescription: function(){
        //     let descriptionValue = document.querySelector('#description').value;

        //     this.recipe.description = descriptionValue;
        // },
        // getLevel: function(){
        //     let levelValue = document.querySelector('#niveau').value;

        //     this.recipe.niveau = levelValue;
        // },
        // getPeople: function(){
        //     let peopleValue = document.querySelector('#personnes').value;

        //     this.recipe.personnes = peopleValue;
        // },
        getIngredients: function(){
            let ingredientsDOM = document.querySelectorAll('.one-ingredient');
            let ingredients = [];

            for (let i = 0; i < ingredientsDOM.length; i++) {

                let number = ingredientsDOM[i].querySelector('#nombre').value;
                let mesure = ingredientsDOM[i].querySelector('#mesure').value;
                let name = ingredientsDOM[i].querySelector('#nom').value;

                let ingredientValue = number + mesure + ' ' + name;
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
        // getPicture: function(){
        //     let pictureValue = document.querySelector('#photo').value;

        //     this.recipe.photo = pictureValue;
        // },
        onSubmit: function(){
            // this.getTitle();
            // this.getDescription();
            // this.getLevel();
            // this.getPeople();
            this.getIngredients();
            this.getSteps();
            // this.getPicture();
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


