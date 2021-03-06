module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['src/**/*.tsx'],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')],
};
