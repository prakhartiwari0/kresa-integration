export default {
    // Base public path (optional)
    base: './',

    // Development server configuration
    // server: {
    //     port: 3000, // Specify the port number
    // },

    // Production build configuration
    build: {
        outDir: 'dist', // Specify the output directory for the build files
        file: 'sdk.js',
        format: 'iife',
        name: 'Kresa-Integration'
    },
};
