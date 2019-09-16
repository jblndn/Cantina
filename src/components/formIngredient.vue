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
                <button type="button" @click="deleteIngredient">
                    <i class="fas fa-times"></i>
                </button>
            </li>
        </ul>
        <span class="champError" v-if="$v.ingredientNumber.$dirty && !$v.ingredientNumber.between">Champ manquant</span>
        <span class="champError" v-if="$v.ingredientNumber.$dirty && !$v.ingredientNumber.between">Nombre positif requis</span>
        <span class="champError" v-if="$v.ingredientText.$dirty && !$v.ingredientText.alpha">Le 3ème champ ne doit contenir que des lettres</span>

    </div>

</template>

<script>
import Service from '../services/Service.js'
import { required, alpha, integer, numeric, between } from "vuelidate/lib/validators";

export default {
    name: 'formIngredient',
    data: function(){
        return {
            ingredientNumber: '',
            ingredientMesure: '',
            ingredientText: this.recipe.ingredients[this.index][1]
        }
    },
    validations: {
        ingredientNumber: {required, numeric, between: between(0,9999)},
        ingredientMesure: {required},
        ingredientText: {required, alpha},
    },
    props: {
        recipe: {
            type: Object
        },
        index: {
            type: Number
        }
    }
}
</script>
<style lang="scss">
    
    

</style>
