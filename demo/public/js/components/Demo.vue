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
                message: 'Welcome to our website',
                style: {
                    background: '#1a75ff'
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