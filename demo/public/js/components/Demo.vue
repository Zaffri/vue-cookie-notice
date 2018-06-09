<template>
    <div>

        <cookie v-bind:data="cookieData"></cookie>

    </div>
</template>
<script>

import Cookie from './WelcomeCookie.vue';

export default {
    data () {
        return {
            cookieData: {
                cookieName: 'cookie-notice-zaffri',
                message: 'This site uses cookies to deliver our services and to show you relevant content. By using our site, you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service.',
                style: {
                    background: '#1a75ff',
                    text: '#e0f5ff'
                }
            }
        }
    },
    methods: {
        
    },
    components: {
        'Cookie': Cookie
    }
}
</script>
<style>
</style>