<template>
    <header>
        <nav class="container-menu">
            <ul class="menu">
                <li class="item-menu">
                    <router-link to='/' class="font-menu">
                        Accueil
                    </router-link>
                </li>
                <li class="item-menu">
                    <router-link to='/add' class="font-menu">
                        Ajouter une recette
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'navbar',
}
</script>

<style scoped lang="scss">
    $red: #ec5b4a;
    header{
        width: 100%;
        text-align: center;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
    }
    .container-menu{
        text-align: center;
        padding: 20px 0;
    }
    .menu .item-menu{
        display: inline-block;
        margin-right: 30px;
        
    }
    .menu .item-menu:last-child{
        margin-right: 0;
    }
    a{
        text-decoration: none;
        color: $red;
        &:hover{
            text-decoration: none;
            color: $red;
        }
    }
</style>


