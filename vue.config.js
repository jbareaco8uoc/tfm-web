const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
        ? '/tfm-web/' // Replace 'your-repo-name' with your GitHub repository name
        : '/',
    transpileDependencies: true
})
