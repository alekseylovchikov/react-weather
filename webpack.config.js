module.exports = {
    entry: './src/App.jsx',
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js',
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        alias: {
            Main: 'src/components/Main.jsx',
            Nav: 'src/components/Nav.jsx',
            SavedList: 'src/components/SavedList.jsx',
            Weather: 'src/components/Weather.jsx',
            About: 'src/components/About.jsx',
            WeatherForm: 'src/components/WeatherForm.jsx',
            WeatherInfo: 'src/components/WeatherInfo.jsx',
            getWeather: 'src/api/weather-api.js',
            getCity: 'src/api/google-get-city.js',
            NotFound: 'src/components/NotFound.jsx',
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                },
                test: /\.jsx?$/,
                exlcude: /node_modules/,
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
};