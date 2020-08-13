import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export function createRouter(){
    const router = new VueRouter({
        mode:"history",
        routes:[]
    })
}