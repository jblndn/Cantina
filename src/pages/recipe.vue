<template>
    <div class="container-recipe centered">
    
    </div>
</template>

<script>

export default {
    name: 'recipe',
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


