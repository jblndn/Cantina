<template>
    <div class="container-add">
        <Form @send='addRecipe'/>
    </div>
</template>

<script>
import Form from "../components/form.vue"
import Service from '../services/Service.js'

export default {
    name: 'add',
    components: {
        Form
    },
    methods: {
         addRecipe: function(recipe){
 
            Service.addRecipe(recipe).then(res => {
                    this.$router.replace('/')
            }).catch(({message}) => alert(message))
        }
    }
}
</script>


