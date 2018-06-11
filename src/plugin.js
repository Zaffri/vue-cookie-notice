import VueCookieNotice from './CookieNotice.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('vue-cookie-notice', VueCookieNotice);
    }
};