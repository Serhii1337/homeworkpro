// webpack.config.js with ES Modules
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'production', // or 'development' - then no 'minify'
    entry: './js/all.js',
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }

};
