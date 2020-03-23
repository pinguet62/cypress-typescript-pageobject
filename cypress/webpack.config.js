const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{loader: 'awesome-typescript-loader'}]
            }
        ]
    },
    plugins: [
      new CircularDependencyPlugin()
    ]
}
