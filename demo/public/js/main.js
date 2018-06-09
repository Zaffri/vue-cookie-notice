/**
 * @name VueJS Cookie Notice Component
 * @description store.js - vuex main store
 * @author Steven Morrison <https://github.com/Zaffri/>
 */

// Vue and Main components
import Vue from 'vue';
import Demo from './components/Demo.vue'

// Main app instance
new Vue({
    el: "#app",
    store: require('./store/store').default,
    data: {

    },
    created: function() {
        
    },
    computed: {

    },
    components: { 
        'Demo': Demo
    }
});