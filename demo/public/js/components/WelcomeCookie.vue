<template>
    <div class="welcome-cookie-wrapper">

        <div id="welcome-cookie" v-bind:style="{ 
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
            dataStyle: 'style',
            dataText: 'text',
            dataBg: 'background'
        }
    },
    props: ['data'],
    methods: {
        
    },
    created: function() {
        // If style is NOT set then set default background
        if(this.data.hasOwnProperty(this.dataStyle) == false) {
        
            this.data.style.background = '#ccc';
            this.data.style.text = '#fff';

        }   else {

            let style = this.data.style;

            // Set default background
            if(style.hasOwnProperty(this.dataBg) == false) {
                this.data.style.background = '#ccc';
            }

            // Set default text color
            if(style.hasOwnProperty(this.dataText) == false) {
                this.data.style.text = '#ddd';
            }
        }
    }
}
</script>
<style>
</style>