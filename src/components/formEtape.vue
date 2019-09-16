<template>
    <div class="form-step">
        <div class="container-input-step">
            <textarea name="etape" cols="30" rows="10" v-model="$v.etape.$model">
            </textarea>
            <button type="button" @click="deleteStep">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <span class="champError" v-if="$v.etape.$dirty && !$v.etape.required">Champ manquant</span>
    </div>

</template>

<script>
import Service from '../services/Service.js'
import { required } from "vuelidate/lib/validators";

export default {
    name: 'formEtape',
    data: function(){
        return {
            etape: this.recipe.etapes[this.index]
        }
    },
    validations: {
        etape: {required},
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
        deleteStep: function(){
            let etapes = this.recipe.etape;
            etape.splice(this.index,1);
            console.log(etapes);
        },
    }
}
</script>
<style lang="scss">
    .form-step{
        .container-input-step{
            display: flex;
            justify-content: space-between;
            align-items: center;

            textarea{
                width: 80%;
            }
        }
    }
    

</style>
