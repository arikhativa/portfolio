const fs = require('fs')
const path = require('path')
const UglifyJS = require('uglify-js')

// Directory containing your built JS files
const buildDir = 'dist/portfolio/browser'

// Function to purge JS
function purgeJavaScript() {
    const jsFiles = fs
        .readdirSync(buildDir)
        .filter((file) => file.endsWith('.js'))

    jsFiles.forEach((file) => {
        const filePath = path.join(buildDir, file)
        const code = fs.readFileSync(filePath, 'utf-8')

        // UglifyJS to remove dead code
        const result = UglifyJS.minify(code, {
            compress: {
                dead_code: true,
                drop_debugger: true,
                unused: true,
            },
            mangle: true,
        })

        if (result.error) {
            console.error(`Error minifying ${file}:`, result.error)
        } else {
            fs.writeFileSync(filePath, result.code, 'utf-8')
            console.log(`Purged and minified ${file}`)
        }
    })
}

purgeJavaScript()
