var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var pkg = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');

var replaceVersion = function () {
    var filePath = path.resolve(__dirname, 'src/cos.js');
    var content = fs.readFileSync(filePath).toString();
    if (content) {
        var newContent = content.replace(/(COS\.version) *= *['"]\d+\.\d+\.\d+['"];/, "$1 = '" + pkg.version + "';");
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent);
            console.log('cos.js version updated.');
        }
    }
};
var replaceDevCode = function (list) {
    list.forEach(function (fileName) {
        var filePath = path.resolve(__dirname, fileName);
        var content = fs.readFileSync(filePath).toString();
        var newContent = content;
        newContent = newContent.replace(/https:\/\/\w+\.com\/[\w\-]+\/server\//, 'https://example.com/');
        newContent = newContent.replace(/test-125\d{7}/, 'test-1250000000');
        newContent = newContent.replace(/wx-125\d{7}/, 'test-1250000000');
        newContent = newContent.replace(/"appid": "wx\w+"/, '"appid": "wx0000000000000000"');
        if (newContent !== content) {
            console.log('replace ' + filePath);
            fs.writeFileSync(filePath, newContent);
        }
    });
};
replaceVersion();

var config = {
    mode: process.env.NODE_ENV,
    devtool: "none",
    watch: true,
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, './demo/lib/'),
        publicPath: path.resolve(__dirname, './demo/lib/'),
        filename: 'cos-wx-sdk-v5.js',
        libraryTarget: 'umd',
        library: 'COS'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    },
    optimization: {
        minimize: false,
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            extractComments: false,
          }),
        ],
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
};

if (process.env.NODE_ENV === 'production') {
    replaceDevCode([
        'demo/config.js',
        'demo/project.config.json',
        'demo-album/config.js',
        'demo-album/project.config.json',
    ]);
    config.watch = false;
    config.output.filename = 'cos-wx-sdk-v5.min.js';
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          extractComments: false,
          terserOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,
            }
          },
        }),
      ],
    };
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]);
}

webpack(config, function (err, stats) {
    // 每次运行 npm run build，将 sourcePath 代码复制一份放入 targetPath
    var sourcePath = path.resolve(__dirname, './demo/lib/cos-wx-sdk-v5.js');
    var targetPath = path.resolve(__dirname, './demo-album/lib/cos-wx-sdk-v5.js');
    fs.createReadStream(sourcePath).pipe(fs.createWriteStream(targetPath));
    if (process.env.NODE_ENV === 'production') {
      var minSourcePath = path.resolve(__dirname, './demo/lib/cos-wx-sdk-v5.min.js');
      var mintTargetPath = path.resolve(__dirname, './demo-album/lib/cos-wx-sdk-v5.min.js');
      fs.createReadStream(minSourcePath).pipe(fs.createWriteStream(mintTargetPath));
    }
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');
    console.log('Build complete.');
});
