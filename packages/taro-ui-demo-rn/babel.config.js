// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true
      }
    ]
  ],
  plugins: [
    [
      'transform-imports',
      {
        'taro-ui': {
          transform: function (importName, matches) {
            console.log('matches', matches);
            return `taro-ui/rn/components/${importName.replace("At", "").toLocaleLowerCase()}`;
          },
          preventFullImport: true
        }
      }
    ]
  ]
}
