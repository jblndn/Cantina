<template>

    <div class="card">
        <router-link :to='`/edit/${recipe.id}`'>
            <div class="container-img">
                <img :src="recipe.photo" alt="">
                <div class="container-icon">
                        <router-link :to='`/edit/${recipe.id}`'>
                            <div class="circle-icon event-edit">
                                <i class="fas fa-edit"></i>
                            </div>
                        </router-link>
                        <div class="circle-icon event-delete">
                            <i class="fas fa-times"></i>
                        </div>
                </div>
            </div>
        </router-link>
        
        <div class="container-text">
            <h3 class="title">
                {{ recipe.titre }}
            </h3>
            <div class="container-person">
                <span>{{ recipe.personnes }}</span>
                <i class="fas fa-user"></i>
            </div>
            <div class="container-bottom">
                <span class="level">
                    {{ recipe.niveau }}
                </span>
                <div class="container-time">
                        <span class="time">
                            {{ recipe.tempsPreparation }}
                        </span>
                        <i class="fas fa-clock"></i>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>

export default {
    name: 'app',
    props : {
        recipe : {
            type: Object,
            required: true
        }
    },
    methods: {
        edit: function(){
            this.$emit('edit', this.recipe)
        }
    }
}
</script>

<style>
    .card{
        width: 300px;
        margin-left: 20px;
    }   
    /* Container image */
    .container-img{
        position: relative;
    }
    .container-img::after{
        position: absolute;
        display: block;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(to top, rgba(255,255,255,1) 5%,rgba(255,255,255,0) 100%);
        z-index: 2;
    }
    .container-img img{
        width: 100%;
        height: 100%;
    }
    .container-icon{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 3;
    }
    .circle-icon{
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid red;
        position: relative;
        margin: 0 10px;
    }
    .circle-icon i{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: block;
        font-size: 1rem;
        color: black;
    }
    /* Container text */
    .container-text{
        padding: 10px;
    }
    .title{
        margin-bottom: 10px;
    }
    .container-person{
        margin-bottom: 10px;
    }
    .container-person span, .container-clock span{
        display: inline-block;
        margin-right: 5px;
    }
    .container-person i, .container-clock i {
        font-size: 1rem;
    }
    .container-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

</style>