module.exports = {
    // Base URL for your application.
    // If your application is hosted on a subpath, you'll need to specify that subpath here.
    publicPath: process.env.NODE_ENV === 'production'
        ? '/tfm-web/' // Replace 'your-repo-name' with your GitHub repository name
        : '/',

    // Output directory for built files (set to `dist` by default)
    outputDir: 'dist',

    // Directory where the built files will be placed in production builds
    assetsDir: 'assets',

    // Whether to use the build of Vue provided by Vue CLI service.
    runtimeCompiler: false,

    // Whether to generate source maps for production builds.
    productionSourceMap: true,

    // Configure webpack-dev-server behavior
    devServer: {
        // Proxy API requests to another backend
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
