/**
 * @name VueJS Cookie Component
 * @description store.js - vuex main store
 * @author Steven Morrison <https://github.com/Zaffri/>
 */

import Vue from 'vue';
import Vuex from 'vuex';

let env = process.env.NODE_ENV !== 'production'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        
    },
    strict: env,
});