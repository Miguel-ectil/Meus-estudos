import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import Formulario from '../views/Projetos/Formulario.vue'
import Lista from '../views/Projetos/Lista.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: Formulario,
                props: true
            },
        ]
    }
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;