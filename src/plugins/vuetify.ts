import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { md3 } from 'vuetify/blueprints'

const myCustomDarkTheme = {
    dark: true,
    colors: {
        primary: '#ffffff',
    }
}


export const vuetify = createVuetify({
    blueprint: md3,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomDarkTheme',
        themes: {
            myCustomDarkTheme
        }
    }
})
