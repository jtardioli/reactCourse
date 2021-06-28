const path = require('path')
// Where is the entry point
// where is the output file

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }

}