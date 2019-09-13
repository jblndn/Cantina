<template>
    <div class="container-edit centered">

    </div>
</template>

<script>
import Form from "./Form.vue"
import Service from "../services/Service"
import Toasted from 'vue-toasted'

export default {
    name: 'edit',
    data: function(){
        return {
            recipe: null
        }
    },
    created: function(){
        Service
        .fetchOne(this.$route.params.id)
        .then(recipe => {
            this.recipe = recipe
        })
    } 
}
</script>


