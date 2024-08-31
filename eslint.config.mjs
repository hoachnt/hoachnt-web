// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
    rules: {
        "vue/component-tags-order": [
            "error",
            {
                order: ["script", "template", "style"],
            },
        ],
    },
    // Additional custom configurations can go here
});
