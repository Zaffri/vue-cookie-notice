<template>
    <div class="welcome-cookie-wrapper">

        <div v-if="visible" id="welcome-cookie" v-bind:style="{ 
                background: data.style.background, 
                color: data.style.text
            }">
            <p>{{ data.message }}</p>

            <span id="close-button" v-on:click="setCookie(cookieName)">Accept & Close [x]</span>
            <div class="clear"></div>
        </div>

    </div>
</template>
<script>

export default {
    data () {
        return {
            /* Component Main Properties */
            visible: false,
            defaultCookieName: 'cookie-notice-demo',
            cookieName: 'cookie-notice-demo', // Use defualt until it's set in 'created'

            /* Customizable Properties */
            dataStyle: 'style',
            dataText: 'text',
            dataBg: 'background',
            dataCookieName: 'cookieName'
        }
    },
    created: function() {

        // Set default styles if none supplied
        this.setDefaultStyle();

        // Get cookie identifier
        let cookieName = this.defaultCookieName;
        if(this.data.hasOwnProperty(this.dataCookieName)) cookieName = this.data.cookieName;
        
        this.cookieName = cookieName;

        // If cookie doesnt exist then show
        if(this.checkCookieExists(cookieName) == false) {
            this.visible = true;
        }

    },
    methods: {
        setDefaultStyle: function() {

            // Check if style is set
            if(this.data.hasOwnProperty(this.dataStyle) == false) {
            
                this.data.style.background = '#ccc';
                this.data.style.text = '#fff';

            }   else {

                let style = this.data.style;

                // Set default background
                if(style.hasOwnProperty(this.dataBg) == false) {
                    this.data.style.background = '#aaa';
                }

                // Set default text color
                if(style.hasOwnProperty(this.dataText) == false) {
                    this.data.style.text = '#fff';
                }
            }
        },
        checkCookieExists: function(cookieName) {
            // Check for cookie

            let cookies = document.cookie.split(';');

            let cookieIndex = -1;

            for(let x=0; x<cookies.length; x++) {
                if(cookies[x].includes(cookieName)) {
                    cookieIndex = x;
                    break;
                }
            }

            if(cookieIndex == -1) {
                // Cookie doesnt exist
                return false;
            }   else {
                // Cookie exists
            }
            return true;
        },
        setCookie: function() {

            try {
                document.cookie = this.cookieName+'=true';
                this.visible = false;
            }   catch($e) {
                console.log('Error: cookie notice not set.');
            }
        }
    },
    props: ['data']
}
</script>
<style>
</style>