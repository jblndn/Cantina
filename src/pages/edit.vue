<template>
    <div class="container-edit centered">

    </div>
</template>

<script>
import Service from '../services/Service.js'

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


