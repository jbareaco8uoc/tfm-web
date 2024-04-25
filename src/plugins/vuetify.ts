import Vue from 'vue';

// Do not work well with ripple directive
// import Vuetify from "vuetify/lib";
// import Vuetify from 'vuetify/lib/framework';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        /**
         * Enabling customProperties will also generate a css variable for each theme color,
         * which you can then use in your components <style> blocks.
         */
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                // primary: "#1a73e8", // Default primary color
                error: "#D32F2F",
                warning: "#e37500",
            },
            dark: {
                // primary: "#1a73e8", // Default primary color
                error: "#D32F2F",
                warning: "#e37500",
                background: "#202124",
            },
        },
    },
    icons: {
        iconfont: "md"
    }
});
