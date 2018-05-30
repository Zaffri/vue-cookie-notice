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
            dataProp: 'style',
            dataText: 'text'
        }
    },
    props: ['data'],
    methods: {
        
    },
    created: function() {
        // If style is NOT set then set default background
        if(this.data.hasOwnProperty(this.dataProp) == false) {

            this.data.style.background = '#ccc';
            this.data.style.text = '#ccc';

        }   else {

            if(this.data.hasOwnProperty(this.dataText) == false) {
                this.data.style.text = '#fff';
            }
        }
    }
}
</script>
<style>
</style>