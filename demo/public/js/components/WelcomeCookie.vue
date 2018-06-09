<template>
    <div class="welcome-cookie-wrapper">

        <div v-if="visible" id="welcome-cookie" v-bind:style="{ 
                background: data.style.background, 
                color: data.style.text
            }">
            {{ data.message }}
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

            /* Custimizable Properties */
            dataStyle: 'style',
            dataText: 'text',
            dataBg: 'background',
            dataCookieName: 'cookieName'
        }
    },
    created: function() {

        // Set default styles if none supplied
        this.setDefaultStyle();

        // Check for cookie
        let cookie = this.defaultCookieName;
        if(this.data.hasOwnProperty(this.dataCookieName)) cookie = this.defaultCookieName;

        if(true) {
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
        }
    },
    props: ['data']
}
</script>
<style>
</style>