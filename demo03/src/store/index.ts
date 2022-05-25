import {createStore} from 'vuex'
import Home from "../view/Home.vue";
import {Router} from "../dto/Router";

export default createStore({
    state: {
        navBarList: [] as any,
        routes: [],
    },
    mutations: {
        addNavBar(state, navBar) {
            state.navBarList.push(navBar);
        },
        addRouter(state, route: Router) {

            state.routes.push();
        },
    }
})