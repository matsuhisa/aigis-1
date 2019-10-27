# node-aigis と webpack を使うまでの手順

- yarn （ 1.6.0 ）
- node （ 12.10.0 ）

## node-aigis のセットアップ

```bash
yarn add node-aigis --dev
```

```bash
node_modules/.bin/aigis init
```

```bash
./node_modules/.bin/aigis run -c ./aigis_config.yml
```

## webpack のセットアップ

```bash
yarn add webpack --dev
yarn add webpack-cli --dev
```

## webpack.config.js の設定

```javascript
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    './src/javascripts/application.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/styleguide/javascripts'
  }
};
```