import VueRouter from 'vue-router'
import home from './pages/home.vue'
import add from './pages/add.vue'
import edit from './pages/edit.vue'
import recipe from './pages/recipe.vue'

export default new VueRouter({
    routes : [
        {
            path: '/', component: home
        },
        {
            path: '/add', component: add
        },
        {
            path: '/edit/:id', component: edit
        },
        {
            path: '/recipe/:id', component: recipe
        }
    ]
})
