<template>
    <div class="container centered">
        
        <navbar></navbar>
        <h1 class="title-home">
            Bienvenue sur Cantina
        </h1>
        <div>
            <card>

            </card>
        </div>

    </div>
</template>

<script>
import card from '../components/card.vue';
import navbar from '../components/navbar.vue';

export default {
    name: 'home',
    components: { 
        card,
        navbar

    } 
};
</script>

