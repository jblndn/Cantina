<template>
    <div class="container-edit centered">
        <Form :recipe='recipe' v-if="recipe" @send='update'/>
    </div>
</template>

<script>
import Form from "../components/form.vue"
import Service from "../services/Service"
import Toasted from 'vue-toasted'

export default {
    name: 'edit',
    data: function(){
        return {
            recipe: null
        }
    },
    components: {
        Form
    },
    created: function(){
        Service
        .fetchOne(this.$route.params.id)
        .then(recipe => {
            this.recipe = recipe
        })
    },
    methods: {
        update: function(recipe){
            Service.updateRecipe(recipe).then(res => {
                    this.$router.replace('/')
            }).catch((error)=> {
                alert(res.message)
            })
        }
    }
}
</script>


