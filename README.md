## VueJS Cookie Notice Component
Version 0.0.1

Customizable cookie notice component (VueJS).

---

## Component Installation

* Install NPM package

```
npm install vue-cookie-notice --save
```

* Import component

```
import VueCookieNotice from 'vue-cookie-notice';
```

* Setup component config e.g.

```
export default {
    data () {
        return {
            cookieData: {
                cookieName: 'cookie-notice-identifier',
                message: 'This site uses cookies, by continuing you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service.',
                style: {
                    background: '#1a75ff',
                    text: '#e0f5ff'
                }
            }
        }
    }
}
``` 

* Add your component to your template and pass the component the config as a prop e.g.

```
<cookie v-bind:data="cookieData"></cookie>
```

---

## Future Changes

* Remove demo and update README.md
* Add notice position customization.
* Add notice transparency customization.
* Remove demo from NPM package & link codepen or alternative demo.