<template>
    <div>
        <ul class="container-ingredient">
            <li class="one-ingredient">
                <input type="number" id="nombre" v-model="$v.ingredientNumber.$model">
                <select name="mesure" id="mesure" v-model="$v.ingredientMesure.$model">
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
                <input type="text" id="nom" v-model="$v.ingredientText.$model">
                <button type="button" class="btn-delete" @click="deleteIngredient">
                    <i class="fas fa-times"></i>
                </button>
            </li>
        </ul>
        <span class="champError" v-if="$v.ingredientNumber.$dirty && !$v.ingredientNumber.between">Champ manquant</span>
        <span class="champError" v-if="$v.ingredientNumber.$dirty && !$v.ingredientNumber.between">Nombre positif requis</span>

    </div>

</template>

<script>
import Service from '../services/Service.js'
import { required, integer, numeric, between } from "vuelidate/lib/validators";

export default {
    name: 'formIngredient',
    data: function(){
        return {
            ingredientNumber: this.setNumber(),
            ingredientMesure: this.setMesure(),
            ingredientText: this.recipe.ingredients[this.index][1]
        }
    },
    validations: {
        ingredientNumber: {required, numeric, between: between(0,9999)},
        ingredientMesure: {required},
        ingredientText: {required},
    },
    props: {
        recipe: {
            type: Object
        },
        index: {
            type: Number
        },
    },
    methods: {
        setNumber: function(){
            let ingredientStr = this.recipe.ingredients[this.index][0];

            if (ingredientStr !== "") {
                var numbers = ingredientStr.match(/\d+/g);
                console.log(numbers);
                return numbers;
            }
            else{
                return '';
            }
        },
        setMesure: function(){
            let mesureStr = this.recipe.ingredients[this.index][0];

            if(mesureStr !== ""){
                let arrayStr = mesureStr.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g);
                return arrayStr[1];
            }
            else{
                return '';
            }
            
        },
        deleteIngredient: function(){
            // let ingredients = this.recipe.ingredients;
            // ingredients.splice(this.index,1);
            // console.log(ingredients);
        },
    }
}
</script>
<style lang="scss" scoped>
    $red: #ec5b4a;

    #nombre, #mesure{
        margin-right: 5px;
    }
    #nombre{
        width: 70px;
    }
    #mesure{
        width: 70px;
        height: 30px;
    }
    #nom{
        width: 250px;
        margin-right: 30px;
    }
    .btn-delete{
        width: 26px;
        height: 26px;
        background-color: $red;
        border: none;
        border-radius: 50%;
        position: relative;
        vertical-align: middle;
        i{
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }

    

</style>
