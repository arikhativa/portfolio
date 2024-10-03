module.exports = {
    css: ['./dist/portfolio/browser/*.css'],
    content: [
        './dist/portfolio/browser/index.html',
        './dist/portfolio/browser/*.js',
    ],
    safelist: {
        greedy: [/p-button-secondary/],
    },
    output: './dist/portfolio/browser/',
}
