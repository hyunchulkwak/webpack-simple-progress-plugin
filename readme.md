# webpack-simple-progress-plugin
![webpack-simple-progress-plugin](http://i.imgur.com/5G767Ag.gif)

## Install
```
$ npm install webpack-simple-progress-plugin --save-dev
```

## Usage
Add the plugin to your webpack config like below.
```
var SimpleProgressPlugin = require('webpack-simple-progress-plugin');
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [
    new SimpleProgressPlugin()
  ]
};
```

## Options
```
new SimpleProgressPlugin(options: object)
```
|property|type|description|
| -------- | ---- | ----------- |
| messageTemplate | string | A template of progress and message shown while bundling modules. You can also use [node-progress token](https://github.com/visionmedia/node-progress#tokens). ```:msg``` shows current message of [webpack ProgressPlugin](https://webpack.github.io/docs/list-of-plugins.html#progressplugin). |
| progressOptions | object | [node-progress options](https://github.com/visionmedia/node-progress#options) to draw progress bar. defaults are shown below.

#### defaults
```
{
  messageTemplate: [':bar', chalk.green(':percent'), ':msg'].join(' ')
  progressOptions: {
    complete: chalk.bgGreen(' '),
    incomplete: chalk.bgWhite(' '),
    width: 40,
    total: 100,
    clear: false
  }  
}
```

## License
MIT (http://www.opensource.org/licenses/mit-license.php)
