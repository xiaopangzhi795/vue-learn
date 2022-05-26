import {createStore} from 'vuex'
import Home from "../view/Home.vue";
import {Router} from "../dto/Router";

export default createStore({
    state: {
        navBarList: [] as any,
    },
    mutations: {
        addNavBar(state, navBar) {
            state.navBarList.push(navBar);
        },
    }
})