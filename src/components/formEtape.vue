<template>
    <div class="form-step">
        <div class="container-input-step">
            <textarea name="etape" id="etape" cols="30" rows="10" v-model="$v.etape.$model">
            </textarea>
            <button type="button" @click="deleteStep" class="btn-delete">
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
            // let etapes = this.recipe.etape;
            // etape.splice(this.index,1);
            // console.log(etapes);
        },
    }
}
</script>
<style lang="scss">
$red: #ec5b4a;

    .form-step{
        .container-input-step{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;

            .champError{
                margin-bottom: 20px;
            }

            textarea{
                width: 80%;
                padding: 10px;
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
        }
    }
    

</style>
